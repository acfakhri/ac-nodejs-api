const express = require('express')
const router = express.Router();
const booksDir = require('../service/booksDir')


//ROUTE LIHAT BUKU
router.get('/', async function( req, res, next) {
    try {
        res.json(await booksDir.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error dalam pengambilan data`, err.message)
        next(err)
    }
})

//ROUTE TAMBAH BUKU
router.post('/', async function (req, res, next){
    try {
        res.json(await booksDir.create(req.body))
    } catch (err) {
        console.error(`Error dalam Menambahkan Data`, err.message)
        next(err)
    }
})

module.exports = router;