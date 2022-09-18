const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://node-crave-api.onrender.com/api/',
      changeOrigin: true,
    })
  );
}
