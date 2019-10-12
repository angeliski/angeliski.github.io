const path = require('path');

module.exports = {
  title: 'Rogerio Angeliski',
  description: 'Just a developer; Just Keep Swimming;',
  port: 8085,
  theme: 'theme',
  themeConfig: {
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