const path = require('path');

const features = require('./src/components/mdxComponents/data.json');

const startCase = require('lodash.startcase');

const config = require('./config');

const flattenedPages = features.reduce((acc, featureGroup) => {
  acc.push(...featureGroup.content.map(feature => ({...feature, parent: featureGroup.title})));
  return acc;
}, []);

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions;

  const result = await graphql(
    `
          {
            allMdx {
              edges {
                node {
                  fields {
                    id
                  }
                  tableOfContents
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
  );

  if (result.errors) {
    console.log(result.errors); // eslint-disable-line no-console
    reporter.panic('Failed to create posts', result.errors);
  }

  // Create blog posts pages.
  result.data.allMdx.edges.forEach(({node}) => {
    createPage({
      path: node.fields.slug ? node.fields.slug : '/',
      component: path.resolve('./src/templates/docs.js'),
      context: {
        id: node.fields.id,
      },
    });
  });
};

exports.onCreateBabelConfig = ({actions}) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-export-default-from',
  });
};

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);

    let value = parent.relativePath.replace(parent.ext, '');

    const pageEntry = flattenedPages.find(page => page.link === `/${value}`);

    const parentName = pageEntry && pageEntry.parent;

    if (value === 'index') {
      value = '';
    }

    if (config.gatsby && config.gatsby.trailingSlash) {
      createNodeField({
        name: `slug`,
        node,
        value: value === '' ? `/` : `/${value}/`,
      });
    } else {
      createNodeField({
        name: `slug`,
        node,
        value: `/${value}`,
      });
    }

    createNodeField({
      name: 'id',
      node,
      value: node.id,
    });

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title || startCase(parent.name),
    });

    createNodeField({
      name: 'parentName',
      node,
      value: parentName || '',
    });
  }
};
