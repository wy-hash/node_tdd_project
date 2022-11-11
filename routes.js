const express = require('express')
const router = express.Router();
const productController = require('./controller/products')

router.get('/', (req, res) => { 
    res.send('안녕하세요')
})
router.get('/c', productController.hello)

module.exports = router