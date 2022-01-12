var fs = require('fs')


var express = require('express')
var path = require('path')
var app = express()

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
    fs.readFile('index.html', function (err, data) {

        res.write(data)
        res.write('sa ')
        res.end('Son')

    })
})

app.get('/login', function (req, res) {
    fs.readFile('login.html', function (err, data) {

        res.write(data)
        res.end('Login Son')

    })
})



app.listen(8000)

/* 

değişken şeklinde fonksiyon tanımlamayı öğrendim
bu fonksiyonları obje oluşturarak daha kullanışlı hale getirdim

js'de her değişken hash'dir 

express modülü aslında bu gibi işleri ve hatta daha fazlasını yapıyor

kullanıcının isteklerine karşı cevaplar oluşturdum

yol tanımlamayı path modülünü öğrendim


*/