//https://www.youtube.com/watch?v=gaZruB6S6Yg&list=PLDUOF2Be-kzm_8UxwfY0pKQqwPR5TOs0X&index=2
var http = require('http')

var server = http.createServer(function (req, res) {

  res.write('Merhabalar')
  res.end('Son')
  
})

server.listen(8000)
