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

//ROUTE EDIT BUKU
router.put('/:id', async function (req, res, next) {
    try {
        const id = req.params.id;
        res.json(await booksDir.edit(id, req.body));
    } catch (err) {
        console.error(`Error dalam Mengedit Data`, err.message);
        next(err);
    }
})

//ROUTE HAPUS BUKU
router.delete('/:id', async function (req, res, next) {
    try {
        const id = req.params.id;
        res.json(await booksDir.deleteBook(id));
    } catch (err) {
        console.error(`Error dalam Menghapus Data`, err.message);
        next(err);
    }
})



module.exports = router;