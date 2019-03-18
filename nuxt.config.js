const pkg = require('./package')
console.log(pkg)
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    script: [
     {src: 'https://hm.baidu.com/hm.js?03c79e57e8f86a458977a0bba9b20d8a'},/*引入百度统计的js*/
    ],
    meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
    { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

 /*
  ** Global CSS
  */
  css: [
  'element-ui/lib/theme-chalk/index.css',
  'assets/css/main.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  { src: '~/plugins/element-ui', ssr: true },
  { src: '~/plugins/ga.js' },/*引入百度统计的js*/
  
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
    ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ['axios'],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
