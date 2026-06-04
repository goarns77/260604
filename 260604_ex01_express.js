//commonjs es-module
const express = require('express');

const app = express();
const PORT = 3000;

//body  > post json parser.
//post, put, patch는 body가 있는 형태로 구현됨.
//get, delete는 body가 없는 형태로 구현됨.

app.use(express.json());

app.get("/",(req,res) => {
    // (req=요청 패러미터, res=응답 패러미터)
    res.send("Hello from the other side")
});

app.post("/",(req,res) => {
    res.json({
        "msg": "I must've called you a thousand times"
    })
})

app.post("/chat",(req,res) => {
    const {msg} = req.body; //payload > req.body > 서버
    res.json({
        reply : `YOU SENT ${msg}.`
    })
})
// 코드의 변동사항을 watch해주는 실행 방법이 필요함
// 1.node 내장 --watch 옵션 (22+ LTS)
// 2. nodemon 설치
// 기존 서버를 ctrl + c로 종료 후 npm i -D nodemon
// npx nodemon 260604_ex01_express.js

// package.json에 script 추가
// "dev": "nodemon 260604_ex01_express.js"
// npm run 01으로 시동 가능

//listen port 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
