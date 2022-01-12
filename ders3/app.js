var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {

    if (req.url == '/') {

        fs.readFile('index.html', function (err, data) {

            res.write(data)
            res.write('sa\n')
            res.end('Son')

        })

    }
    if (req.url == '/login') {

        fs.readFile('login.html', function (err, data) {

            res.write(data)
            res.end('Son')

        })

    }

})

server.listen(8000)

/* 
    npm -> node package manager
    
    npm modulü yüklerken işletim sistemine değil
     hangi klasörde çağrılıyorsa modülü o projeye yükler

    npm ile global ve yerel yükleme önemli!

    npm install <modülismi> --save (modulü package.json dependencies adı altında kaydeder)

    konsolda kullanılacak modülleri global olarak yükleme daha mantıklı
    modülü kod içinde kullanacaksak local olarak yüklemek daha mantıklı

    global yüklenen paketler package.json'a yüklenmez!

    package.json aktif olan modülleri tutar ve çok önemlidir
    
    nodemon modülünün ne işe yaradığını öğrendim

*/