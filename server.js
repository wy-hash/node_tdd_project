const express = require('express');
const productRoutes = require('./routes.js')
const mongoose = require('mongoose');

const PORT = 5000;
const HOST = '127.0.0.1';
const app = express()

// DB 연결
mongoose.connect('mongodb+srv://root:root@tdd.nzeehnt.mongodb.net/TDD_DB?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(() => console.log('MongoDb Connected...'))
    .catch(err => console.log(err));

// 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/products', productRoutes);

// 서버 실행
app.listen(PORT, HOST, () => {
    console.log(`Server Start Host: ${HOST}, PORT: ${PORT}`);
    console.log(`http://${HOST}:${PORT}`);
})

// 라우터 등록
app.get('/', (req, res) => { 
    res.send('hi');
})

