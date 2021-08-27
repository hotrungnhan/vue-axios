var http = require('http')
http
  .createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.url == '/greet') {
      res.write('hallo') //write a response
      res.end()
    }
  })
  .listen(8000, function () {
    console.log('server start at port 8000s') //the server object listens on port 3000
  })
