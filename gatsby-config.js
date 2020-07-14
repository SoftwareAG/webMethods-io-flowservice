require("dotenv").config();
const config = require("./config");

const matchAll = require('match-all');

const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "docs",
      path: `content`
    }
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "assets",
      path: `content/assets`
    }
  },
  'gatsby-plugin-sharp',
  `gatsby-transformer-sharp`,
  `gatsby-plugin-material-ui`,
  'gatsby-plugin-sitemap',
  'gatsby-plugin-emotion',
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 1035,
            sizeByPixelDensity: true
          }
        },
        {
          resolve: 'gatsby-remark-copy-linked-files'
        }
      ],
      extensions: [".mdx", ".md"]
    }
  },
  {
    resolve: 'gatsby-plugin-local-search',
    options: {
      // A unique name for the search index. This should be descriptive of
      // what the index contains. This is required.
      name: 'pages',

      // Set the search engine to create the index. This is required.
      // The following engines are supported: flexsearch, lunr
      engine: 'flexsearch',

      // Provide options to the engine. This is optional and only recommended
      // for advanced users.
      //
      // Note: Only the flexsearch engine supports options.
      engineOptions: {
        encode: "icase",
        tokenize: "forward",
        threshold: 1,
        resolution: 3,
        depth: 2
      },

      // GraphQL query used to fetch all data for the search index. This is
      // required.
      query: `
        {
          allMdx {
            edges {
              node {
                id
                frontmatter {
                  metaTitle
                  metaDescription
                }
                fields {
                  id
                  title
                  slug
                  parentName
                }
                excerpt(pruneLength: 50000, truncate: false)
                rawBody
              }
            }
          }
        }
       `,

      // Field used as the reference value for each document.
      // Default: 'id'.
      ref: 'id',

      // List of keys to index. The values of the keys are taken from the
      // normalizer function below.
      // Default: all fields
      index: ['title', 'body', 'componentText'],

      // List of keys to store and make available in your UI. The values of
      // the keys are taken from the normalizer function below.
      // Default: all fields
      store: ['id', 'slug', 'title', 'parentName'],

      // Function used to map the result from the GraphQL query. This should
      // return an array of items to index in the form of flat objects
      // containing properties to index. The objects must contain the `ref`
      // field above (default: 'id'). This is required.
      normalizer: ({data}) => data.allMdx.edges.map(({node}) => {
        const body = node.rawBody || "";
        // TODO Update regex to (comment|description|title)\s?=\s?"([^"]*)" and test

        const regex = /comment="([^"]*)"|description="([^"]*)"/gm;

        const componentText = matchAll(body, regex).toArray().join('. ');

        return {
          id: node.id,
          title: node.fields.title,
          slug: node.fields.slug,
          parentName: node.fields.parentName,
          body: node.excerpt,
          componentText
        };
      })
      ,
    },
  },
  {
    resolve: `gatsby-plugin-gdpr-cookies`,
    options: {
      facebookPixel: {
        pixelId: '757069165097356',
        cookieName: 'gatsby-gdpr-facebook-pixel',
      },
      // defines the environments where the tracking should be available  - default is ["production"]
      environments: ['production', 'development']
    },
  }
];

// check and add pwa functionality
if (config.pwa && config.pwa.enabled && config.pwa.manifest) {
  plugins.push({
    resolve: `gatsby-plugin-manifest`,
    options: {...config.pwa.manifest},
  });
  plugins.push({
    resolve: 'gatsby-plugin-offline',
    options: {
      appendScript: require.resolve(`./src/custom-sw-code.js`),
    },
  });
} else {
  plugins.push('gatsby-plugin-remove-serviceworker');
}

// check and remove trailing slash
if (config.gatsby && !config.gatsby.trailingSlash) {
  plugins.push('gatsby-plugin-remove-trailing-slashes');
}

module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    docsLocation: config.siteMetadata.docsLocation,
    ogImage: config.siteMetadata.ogImage,
    favicon: config.siteMetadata.favicon,
    logo: {link: config.header.logoLink ? config.header.logoLink : '/', image: config.header.logo}, // backwards compatible
    headerTitle: config.header.title,
    githubUrl: config.header.githubUrl,
    helpUrl: config.header.helpUrl,
    tweetText: config.header.tweetText,
    headerLinks: config.header.links,
    siteUrl: config.gatsby.siteUrl,
  },
  plugins: plugins
};
