const PROXY_CONFIG = [
  {
    context: [
      "/services"
    ],
    target: "https://payamak.isikato.ir",
    secure: false,
    changeOrigin: true,
    // cookieDomainRewrite: "localhost",
    cookieDomainRewrite: "payamak.isikato.ir",
    withCredentials: false,
    onProxyRes: (proxyRes, req, res) => {
      // console.log(proxyRes);
      // console.log(req.headers['Set-Cookie']);
      // console.log(res);
      // console.log(res.headers['Set-Cookie']);
      // proxyRes.headers['x-added'] = 'foobar'; // add new header to response
    }
  }
]

module.exports = PROXY_CONFIG;
