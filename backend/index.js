import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express(); // <-- MOVE THIS LINE UP

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:5173'}))
const PORT = process.env.PORT || 9876;
 const db= new pg.Pool({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
    password: (process.env.DB_PASSWORD),
    port: parseInt(process.env.DB_PORT),
    });
app.post("/submit", async (req, res) => {
  const { education, skills, interests, location, experience } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO applications (education, skills, interests, location, experience) VALUES ($1, $2, $3, $4, $5)",
      [education, skills, interests, location, experience]
    );
    res.sendStatus(200);
  } catch (error) {
    console.error("Error inserting data:", error);
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});