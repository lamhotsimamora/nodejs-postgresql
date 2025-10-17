// contoh jika ingin memisahkan query ke model
const db = require('../../db/db');


async function findAll() {
const { rows } = await db.query('SELECT * FROM users ORDER BY id');
return rows;
}


module.exports = { findAll };