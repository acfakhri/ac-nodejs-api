const mysql = require ('mysql2/promise')
const config = require('../config')

const query = async (sql, params) => {
    const conn = await mysql.createConnection(config.db)
    const [results, ] = await conn.execute(sql, params)

    return results
}

module.exports = {
    query
}
