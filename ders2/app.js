//version 2.1
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {

    //res.write('Merhaba\n')
    //res.write('<html><body><h1>Merhaba</h1></body></html>')

    if (req.url == '/') {

        fs.readFile('html/index.html', function (err, data) {

            res.write(data)
            res.end('Son')

        })

    }
    if (req.url == '/login') {

        fs.readFile('html/login.html', function (err, data) {

            res.write(data)
            res.end('Son')

        })

    }

    //res.write('Mesaj')
    //res.end('Son')

})

server.listen(8000)

/* 
    nodemon nedir bunu öğrendim
    modül nedir bunu öğrendim
    fs ve http ile server kurdum
    html dosyasını yazdırmayı ve bunların yolunu belirtmeyi öğrendim

*/