const sql = require('mysql2/promise');
const pets = require('./petsDb');
require('dotenv').config();

const pool = sql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
});

// (async function createPepperfriendsTable() {
//   try {
//     const conn = await pool.getConnection();

//     // conn.query("CREATE DATABASE IF NOT EXISTS likes");
//     conn.query('USE petsAreUs');
//     const userDb = await conn.query(
//       'CREATE TABLE IF NOT EXISTS likes (petid INT NOT NULL, user VARCHAR(255) NOT NULL,  PRIMARY KEY(petid,user), FOREIGN KEY (user) REFERENCES user(username), FOREIGN KEY(petid) REFERENCES pets(id))',
//     );
//     console.log(userDb);
//     conn.release();
//   } catch (error) {
//     console.log(error);
//   }
// })();

// async function popDb() {
//   try {
//     const conn = await pool.getConnection();
//     conn.query('USE petsAreUs');
//     pets.map((pet) => {
//       conn.execute(
//         `INSERT INTO pets (name,type,img,username,about,age) VALUES ("${pet.name}","${pet.type}","${pet.img}","${pet.username}","${pet.about}","${pet.age}")`,
//       );
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// popDb();

// async function test() {
//   try {
//     const conn = await pool.getConnection();

//     conn.query('USE petsAreUs');
//     conn.query('CREATE TABLE IF NOT EXISTS pets (name VARCHAR(255))')

//     conn.release();
//   } catch (error) {}
// }

// test();

// async function testConnection() {
//   try {
//     const conn = await pool.getConnection();
//     //do a query
//     console.log('connection was successful', conn);
//     conn.release();
//     //release connection to pool
//   } catch (error) {
//     console.log(error);
//   }
// }

// testConnection();
