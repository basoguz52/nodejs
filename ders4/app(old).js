var http = require('http')
var fs = require('fs')

var yonlendirici = new Object()


var homeController = function (req, res) {
    fs.readFile('index.html', function (err, data) {

        res.write(data)
        res.write('sa ')
        res.end('Son')

    })
}
var loginController = function (req, res) {
    fs.readFile('login.html', function (err, data) {

        res.write(data)
        res.end('Login Son')

    })
}

yonlendirici['/'] = homeController
yonlendirici['/login'] = loginController


var server = http.createServer(function (req, res) {

    if (req.url in yonlendirici)
        yonlendirici[req.url](req, res)


})

server.listen(8000)

/* 

değişken şeklinde fonksiyon tanımlamayı öğrendim
bu fonksiyonları obje oluşturarak daha kullanışlı hale getirdim

js'de her değişken hash'dir 

express modülü aslında bu gibi işleri ve hatta daha fazlasını yapıyor
*/