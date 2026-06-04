// npx nodemon 02_sdk.js
// package.json -> script
/*
{
  "scripts": {
    "01": "nodemon 01_express.js",
    "02": "nodemon 02_sdk.js"
  }
}
*/
// npm run 02

// npm i dotenv -> .env 파일 읽어오기
require("dotenv").config();
// .env 파일의 키 = 값으로 저장된 데이터를 환경 변수에 주입하는 라이브러리.
// .env 파일 자체는 git에 올리지 않음 (보안상 문제로).
// gitignore 파일에 .env 추가
// .gitignore 파일이 없다면 touch .gitignore

// https://www.npmjs.com/package/express
// https://github.com/expressjs/express
// https://expressjs.com/ko/

const express = require("express");
const groq = require("groq-sdk")

const {GoogleGenAI} = require("@google/genai");

//SDK, API 키 요구
const genai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})
// npm i @google/genai / npm i groq-sdk

const app = express();
const PORT = 3001; // node 3xxx. 5xxx (python). java 8xxx
// 겹치면 기존 실행 포트가 이김 (충돌 시 신규가 실행 X)


app.get("/", async (req,res)=>{
  const modelname = "gemma-4-31b-it"
  const result = await genai.models.generateContent({
      model: modelname,
      contents: "점심 메뉴 추천해줘",
  })
  res.json({
    answer: result.text,
  })
})

app.get("/groq", async (req,res)=>{
  const groq_modelname = "openai/gpt-oss-120b"
  const result = await groq.chat.completions.create({
    model: groq_modelname,
    messages: [{ role:"user", content:"점심 메뉴 추천해줘"}]
  })
  res.json({
    answer: result.choices[0].message.content,
    //구조가 애매하면 json.stringify(result)로 분석
  })
})

app.listen(PORT, () => {
  console.log(`${PORT}(으)로 작동중`);
});