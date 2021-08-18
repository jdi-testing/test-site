export default {
  head: {
    titleTemplate: '%s - nuxt-app',
    title: 'nuxt-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'css', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css' },
      { rel: 'stylesheet', type: 'css', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' },
    ]
  },
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    'material-design-icons-iconfont/dist/material-design-icons.css'
  ],
  buildModules: [
    '@nuxtjs/vuetify',
  ],
}

