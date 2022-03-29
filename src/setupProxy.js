const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    process.env.REACT_APP_API_RSU_PREFIX,
    createProxyMiddleware({
      target: 'http://localhost:6006',
      changeOrigin: true,
    })
  );
};
