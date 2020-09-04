const path = require('path');

module.exports = {
  title: 'Rogerio Angeliski',
  description: 'Just a developer; Just Keep Swimming;',
  port: 8085,
  theme: 'theme',
  themeConfig: {
    sitemap: {
      hostname: 'https://angeliski.com.br',
    },
    modifyBlogPluginOptions(blogPluginOptions){
      const comment = {
        service: 'disqus',
        shortname: 'angeliski-1',
        // service: 'vssue',
        // owner: 'You',
        // repo: 'Your repo',
        // clientId: 'Your clientId',
        // clientSecret: 'Your clientSecret',
      }

      return { ...blogPluginOptions, comment }
    },
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Temas',
        link: '/tag/',
      },
      {
        text: 'Sobre mim',
        link: '/about/',
      },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/angeliski',
        },
        {
          type: 'linkedin',
          link: 'http://linkedin.com/in/angeliski',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/angeliski_',
        },
      ]
  },
},
locales: {
  '/': {
    lang: 'pt-BR',
  },
},
plugins: {
  'vuepress-plugin-seo': {
    //...
    customMeta: (add, context) => {
        add('twitter:site', "https://twitter.com/angeliski_")
        add('viewport', 'width=device-width, initial-scale=1')
    },
},
  '@vuepress/medium-zoom': {
    selector: 'img.zoom-custom-imgs',
    // medium-zoom options here
    // See: https://github.com/francoischalifour/medium-zoom#options
    options: {
      margin: 16
    }
  },
  'vuepress-plugin-canonical':    {
      baseURL: 'https://angeliski.com.br',
      stripExtension: true 
    }
},
markdown: {
  lineNumbers: true
},
configureWebpack: {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../')
    }
  }
},
}