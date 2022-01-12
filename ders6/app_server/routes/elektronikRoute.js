var express = require('express')
var router = express.Router()
var controller = require('../controller/elektronikController')


router.get('/', controller.index)
router.get('/bilgisayar', controller.bilgisayar)

module.exports = router