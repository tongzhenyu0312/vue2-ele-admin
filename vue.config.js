module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/vue2-ele-admin/' : '/',
  configureWebpack: {
    resolve: {
      extensions: ['.wasm', '.mjs', '.js', '.json', '.vue'],
    },
  },
};
