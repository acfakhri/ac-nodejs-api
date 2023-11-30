const db = require ('./db');
const helper = require ('../helper');
const config = require ('../config');


const getMultiple = async (page = 1) => {
    const rows = await db.query (
        `SELECT id, judul, penulis, penerbit, tahun_terbit, isbn FROM databuku  `
    );

    const data = helper.CekRow(rows)
    return {
        data
    }    
} 

const create = async (booksData) => {
    try {
        const result = await db.query(
            `INSERT INTO databuku 
            ( judul, penulis, penerbit, tahun_terbit, isbn )
            VALUES ('${booksData.judul}', '${booksData.penulis}', '${booksData.penerbit}', '${booksData.tahun_terbit}', '${booksData.isbn}' )
            `
        );
        if (result.affectedRows ) {
            return {message: 'Data buku berhasil ditambah'}
        } else {
            return {message: 'Data Buku Gagal Ditambahkan'}
        }
    } catch (error) {
        return {message: 'Data Buku Gagal Ditambahkan'}
    }
}

module.exports = {
    getMultiple,
    create
}
    

