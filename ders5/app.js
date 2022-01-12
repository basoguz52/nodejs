var fs = require('fs')

var express = require('express')
var path = require('path')
var app = express()


var ctrlElektronik = require('./elektronikController') //sınıf ekledik
//var nesneElektronik = ctrlElektronik("oğuzhan") // bir nevi nesne oluşturuyoruz



app.use('/public', express.static(path.join(__dirname, 'public')))


app.get('/elektronik', ctrlElektronik.index)

app.get('/elektronik/bilgisayar', ctrlElektronik.bilgisayar)

app.listen(8000)

/*

express modülünün kendi dosya okuma metodları var

modül tanımlamayı öğrendim

require komutu çektiğimiz js dosyasından sadece export edilen komutları okuyabiliyor

fonksiyonlar export ediliyor

*/