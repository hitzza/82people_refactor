const express = require('express');
const router = express.Router();
const db = require('../models/db')

// 기본 라우트
router.get('/', (req, res) => {
  res.status(200).json({ message: 'api start!' });
});
async function getUsers() {
  const [rows] = await db.query('SELECT * FROM test');
  console.log(rows);
}

getUsers();

module.exports = router;
