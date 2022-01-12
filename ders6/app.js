var fs = require('fs')

var express = require('express')
var path = require('path')
var app = express()


var routeElektronik = require('./app_server/routes/elektronikRoute')

app.use('/public', express.static(path.join(__dirname, 'public')))

app.use('/elektronik',routeElektronik)

app.listen(8000)

/*
router nesnesi ile get post gibi komutlardan kurtuluyoruz

route nesnesi ile modülden export edip nasıl route ediceğimi öğrendim

route elektronik sadece o alanı kontrol etsin istiyoruz bu yüzden elektronik kısmını route 'a devrediyoruz

router ile router'ın kullandığı fonksiyonlarnı aynı dosya içinde olması pek pratik değil çünkü
görevleri ayrı
controller : isteğe karşılık vermek
router : istekleri yönlendirmek
görevleri farklı olduğu için farklı dosyalara yerleştirmek daha mantıklı

dosyaları bağlamayı kontrol et nasıl ve hangi dosyalar birbirine bağlanıyor öğren

*/