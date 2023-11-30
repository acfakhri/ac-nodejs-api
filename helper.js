const getOffset = (currentPage=1, listPerPage) => {
    return (currentPage - 1) * [listPerPage]
} 

const CekRow = (rows) => {
    if (!rows) {
        return []
    }
    return rows;
}

module.exports = {
    getOffset,
    CekRow
}