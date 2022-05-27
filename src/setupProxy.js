const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api-crave.herokuapp.com/api/',
      changeOrigin: true,
    })
  );
}
