module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/jdi-light/vuetify/'
    : '/',
  transpileDependencies: [
    'vuetify',
  ],
};
