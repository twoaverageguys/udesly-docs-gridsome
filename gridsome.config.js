// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const wordpress = require('./wordpress.config')

module.exports = {
  siteName: 'Udesly Adapter Docs',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png',
  },
  siteUrl: process.env.SITE_URL ? process.env.SITE_URL : 'https://example.com',
  settings: {
    githubRepoBase: 'https://github.com/eclipsesrl/udesly-docs-gridsome/blob/master/content/',
    nav: {
      links: [
        {
          path: '/wordpress/',
          title: 'WordPress',
          logo: 'WordPressLogo',
        }
      ],
    },
    sidebar: [
      wordpress.sidebar
    ],
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'MarkdownPage',
        baseDir: './content',
        template: './src/templates/MarkdownPage.vue',
        plugins: ['@gridsome/remark-prismjs'],
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [/token$/],
        },
      },
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9',
      },
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {},
    },
  ],
};