var httpProxy = require('http-proxy');
 
var proxy = httpProxy.createProxyServer({ });
 
var host = process.argv[2];
if (host.indexOf('http') === -1) host = 'http://' + host;
 
require('http').createServer(function(req, res) {
  proxy.web(req, res, { target: host });
}).listen(1337);
