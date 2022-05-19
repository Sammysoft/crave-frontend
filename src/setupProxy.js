const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://api-crave.herokuapp.com/api/',
      changeOrigin: true,
    })
  );
}
