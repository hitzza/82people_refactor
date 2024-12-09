const express = require('express');
const router = express.Router();

// 기본 라우트
router.get('/', (req, res) => {
  res.status(200).json({ message: 'api start!' });
});

module.exports = router;
