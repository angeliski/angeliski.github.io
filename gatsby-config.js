require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

const plugins = [
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-react-helmet`,
  // needs to be the first to work with gatsby-remark-images
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `uploads`,
      path: `${__dirname}/static/assets/img`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/posts`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/markdown-pages`,
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.md`, `.mdx`],
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-relative-images",
          options: {
            name: "uploads",
          },
        },
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 960,
            linkImagesToOriginal: false,
          },
        },
        `gatsby-remark-lazy-load`,
        `gatsby-remark-prismjs`,
      ],
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Rogerio Angeliski - Blog`,
      short_name: `Angeliski`,
      start_url: `/`,
      background_color: `#16202c`,
      theme_color: `#2196f3`,
      display: `minimal-ui`,
      icon: `src/images/icon.png`, // This path is relative to the root of the site.
    },
  },
  `gatsby-plugin-sitemap`,
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  `gatsby-plugin-offline`,
  `gatsby-plugin-netlify-cms`,
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              position,
              description
              author
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMdx } }) => {
            return allMdx.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.frontmatter.description,
                date: edge.node.frontmatter.date,
                category: edge.node.frontmatter.category,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                link: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ 'content:encoded': edge.node.html }]
              })
            })
          },
          query: `
            {
              allMdx(
                sort: { fields: frontmatter___date, order: DESC }) {
                edges {
                  node {
                    fields {
                      slug
                    }
                    frontmatter {
                      category
                      date
                      description
                      title
                    }
                    excerpt
                    html
                    timeToRead
                  }
                }
              }
            }
          `,
          output: '/feed.xml',
          title: 'Rogerio Angeliski - Blog - RSS Feed'
        }
      ]
    }
  }
];

if(process.env.BRANCH === "master"){
  console.log('Add gatsby-plugin-algolia-search')
  plugins.push({
    resolve: `gatsby-plugin-algolia-search`,
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
      queries,
      chunkSize: 10000, // default: 1000
      enablePartialUpdates: true,
    },
  })
}


module.exports = {
  siteMetadata: {
    title: `Rogerio Angeliski`,
    position: `Software Engineer`,
    description: `O lugar onde eu compartilho as coisas bacanas que eu aprendi`,
    author: `@angeliski_`,
    siteUrl: `https://angeliski.com.br`,
  },
  plugins
}
