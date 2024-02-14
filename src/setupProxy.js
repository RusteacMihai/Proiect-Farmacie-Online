const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',  // Definiți prefixul pentru căile către serverul API
    createProxyMiddleware({
      target: 'http://localhost:3002',  // Specificați adresa serverului API
      changeOrigin: true,
    })
  );
};