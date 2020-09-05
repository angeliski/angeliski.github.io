const path = require('path');

module.exports = {
  title: 'Rogerio Angeliski',
  description: 'Just a developer; Just Keep Swimming;',
  port: 8085,
  theme: 'theme',
  head: [
    ['link', { rel: 'icon', href: '/icons/manifest-icon-192.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152.jpg' }],
    ['link', { rel: 'mask-icon', href: '/icons/manifest-icon-192.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/manifest-icon-192.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    dateFormat: 'DD-MM-YYYY',
    globalPagination: {
      prevText: "Voltar",
      nextText: "Avançar",
      lengthPerPage: 5,
    },

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
      globalPagination = {
        prevText: "Voltar",
        nextText: "Avançar"
      }

      return { ...blogPluginOptions, comment, globalPagination }
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
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "Atualização disponível.",
      buttonText: "Atualizar agora"
    }
  },
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