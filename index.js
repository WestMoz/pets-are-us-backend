require("dotenv").config();
const sql = require("mysql2/promise");
const express = require("express");
const bcrypt = require("bcrypt");
const PORT = 4000;
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { request, response } = require("express");

const app = express();

app.use(express.json());
app.use(cors());

const pool = sql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
});

app.post("/get-liked-pets", authorizeUser, async (request, response) => {
  try {
    const username = request.decodedToken.username;
    const conn = await pool.getConnection();
    conn.query("USE petsAreUs");
    const likedPets = await conn.execute(`
    SELECT * FROM likes 
	    JOIN pets ON pets.id = likes.petid 
        WHERE user='${username}' 
    `);
    conn.release();
    response.status(200).send(likedPets[0]);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error });
  }
});

app.post("/like-pet", authorizeUser, async (request, response) => {
  try {
    if (!request.body.petid)
      return response.status(401).send({ message: "Missing required field" });
    const username = request.decodedToken.username;
    const petid = request.body.petid;
    console.log(username, petid);
    const conn = await pool.getConnection();
    conn.query("USE petsAreUs");
    const resp = await conn.execute(
      `INSERT INTO likes (petid, user) VALUES (${petid},'${username}')`
    );
    conn.release();
    response.status(200).send(resp);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error });
  }
});

app.post("/delete-like", authorizeUser, async (request, response) => {
  try {
    if (!request.body.petid)
      return response.status(401).send({ message: "Missing required field" });
    const username = request.decodedToken.username;
    const petid = request.body.petid;
    console.log(username, petid);
    const conn = await pool.getConnection();
    conn.query("USE petsAreUs");
    const resp = await conn.execute(
      `DELETE FROM likes WHERE petid = ${petid} AND user = '${username}'`
    );
    conn.release();
    response.status(200).send(resp);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error });
  }
});

app.post("/get-all-pets", authorizeUser, async (request, response) => {
  try {
    const username = request.decodedToken.username;
    const conn = await pool.getConnection();
    conn.query("USE petsAreUs");
    const otherPets = await conn.execute(
      `SELECT * FROM pets WHERE username!=?`,
      [username]
    );
    conn.release();
    response.status(200).send(otherPets[0]);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error });
  }
});

app.post("/get-your-pets", authorizeUser, async (request, response) => {
  console.log("get your pets hit");
  try {
    const username = request.decodedToken.username;
    const conn = await pool.getConnection();
    conn.query("USE petsAreUs");
    const yourPets = await conn.execute(`SELECT * FROM pets WHERE username=?`, [
      username,
    ]);
    conn.release();
    response.status(200).send(yourPets[0]);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error });
  }
});

app.post("/login", async (request, response) => {
  try {
    if (!request.body.username || !request.body.password)
      return response
        .status(401)
        .send({ message: "Missing username or password" });

    const username = request.body.username;
    const password = request.body.password;
    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `SELECT * FROM petsAreUs.user WHERE username = ?`,
      [username]
    );
    const fetchedUser = queryResponse[0][0];
    if (!fetchedUser)
      response.status(401).send({ message: "User does not exist" });
    else {
      if (await bcrypt.compare(password, fetchedUser.password)) {
        const username = fetchedUser.username;

        const jwtToken = jwt.sign(
          { username: username },
          process.env.ACCESS_TOKEN_KEY
        );
        response
          .status(200)
          .send({ message: "successfully authenticated", jwt: jwtToken });
      } else {
        response.status(401).send({ message: "incorrect password" });
      }
    }

    console.log(fetchedUser);
    conn.release();
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error });
  }
});

app.post("/user", async (request, response) => {
  try {
    if (!request.body.username || !request.body.password)
      return response
        .status(401)
        .send({ message: "Missing username or password" });

    const username = request.body.username;
    const password = request.body.password;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const conn = await pool.getConnection();
    const queryResponse = await conn.execute(
      `INSERT INTO petsAreUs.user (username, password) VALUES (?,?)`,
      [username, hashedPassword]
    );
    conn.release();
    response.status(201).send(queryResponse);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error });
  }
});

function authorizeUser(request, response, next) {
  console.log("auth hit");
  const token = request.body.jwt;
  if (token == null) {
    console.log(token, "token is null");
    return response.status(401).send();
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decodedToken) => {
    if (err) return response.status(403).send();
    request.decodedToken = decodedToken;
    next();
  });
}

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
