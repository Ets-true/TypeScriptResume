const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  const { REACT_APP_API_HOST: host, REACT_APP_API_PORT: port } = process.env;

  const target = `http://${host}:${port}`;
  const changeOrigin = true;

  app.use(
    process.env.REACT_APP_API_PREFIX,
    createProxyMiddleware({ target, changeOrigin })
  );
};
