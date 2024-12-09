const express = require('express');
// const cors = require('cors');
const helmet = require('helmet');
// const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(helmet()); // 보안 설정
// app.use(cors()); // TODO: origin 설정 필요
// app.use(bodyParser.json()); // JSON 요청 파싱

// 기본 라우팅
const indexRoutes = require('./routes/index');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRoutes);


// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
