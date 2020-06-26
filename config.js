const config = {
  gatsby: {
    pathPrefix: '/webmethods-io-flowservice',
    siteUrl: 'https://webmethods.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: './src/components/images/logo.svg',
    logoLink: '/',
    title: "",
    githubUrl: 'https://github.com/hasura/gatsby-gitbook-boilerplate',
    helpUrl: '',
    tweetText: '',
    /*<li>
		    <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>*/
    social: ``,
    links: [{text: '', link: ''}],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/', // add trailing slash if enabled above
      '/getting-started',
      '/simple-flowservice',
      '/editor-usage',
      '/define-io',
      '/conditional-constructs',
      '/loop-constructs',
      '/error-handling',
      '/pipeline-mapping',
      '/run-flowservices',
      '/debug-flowservices',
      '/schedule',
      '/flow-samples',
      '/faqs'
    ],
    collapsedNav: [
      // add trailing slash if enabled above
      '/simple-flowservice',
      '/editor-usage',
      '/conditional-constructs',
      '/loop-constructs',
      '/error-handling',
      '/pipeline-mapping',
      '/run-flowservices',
      '/debug-flowservices',
      '/define-io',
      '/flow-samples',
      '/schedule'
    ],
    links: [/*{text: 'Hasura', link: 'https://hasura.io'}*/],
    frontline: false,
    ignoreIndex: false,
    //<a href='https://hasura.io/learn/'>graphql </a><div class='greenCircle'></div><a href='https://hasura.io/learn/graphql/react/introduction/'>react</a>
    title: "FlowServices Guide",
  },
  siteMetadata: {
    title: 'webMethods.io | FlowService Editor',
    description: 'Documentation for FlowService Editor ',
    ogImage: null,
    docsLocation: '',
    favicon: 'https://www.softwareag.cloud/favicon.ico',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'webMethods.io | FlowServices',
      short_name: 'FlowServices',
      start_url: '/',
      background_color: '#1776BF',
      theme_color: '#1776BF',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
