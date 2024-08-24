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

const edit = async (id, booksData) => {
   try {
    const result = await db.query (
        `UPDATE databuku SET 
                judul = '${booksData.judul}', 
                penulis = '${booksData.penulis}', 
                penerbit = '${booksData.penerbit}', 
                tahun_terbit = '${booksData.tahun_terbit}', 
                isbn = '${booksData.isbn}'
            WHERE id = ${id}`
    );
    if (result.affectedRows) {
        return {message : 'Data buku berhasil di edit'}
    } else {
        return {message : 'Data buku gagal di update'}
    }
} catch (error) {
        return {message : 'Data buku gagal di update'}
}
}

const deleteBook = async (id) => {
    try {
      const result = await db.query (
        `DELETE databuku WHERE id = ${id}`
      );
    
      if (result.affectedRows) {
        return {message : 'Data buku berhasil dihapus'}
      } else {
        return {message : 'Data buku gagal dihapus'}
      }
      
    }catch (error) {
        return {message : 'Data buku gagal dihapus '}
    }
}

module.exports = {
    getMultiple,
    create,
    edit,
    deleteBook
}
    

