//환경 변수 호출
require("dotenv").config(); //.env를 환경 변수에 주입
//npm run 03 (inject env 출력)

const express = require("express");
const { GoogleGenAI } = require("@google/genai");
const Groq = require("groq-sdk");

//전역 변수 설정
const PORT = 3002;
const app = express();
const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// body의 json, urlencoded 해석을 위한 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/chat/gen", async (req, res) => {
  const { ask = "질문 없음", model = "gemma-4-26b-a4b-it" } = req.body;
  console.log("ask", ask);

  const response = await genAI.models.generateContent({
    model,
    contents: ask,
  });

  res.json({ answer: response.text });
  // res.json({msg : "GoogleGenAI"});
});

app.post("/chat/groq", async (req, res) => {
  const { ask = "질문 없음", model = "openai/gpt-oss-120b" } = req.body; // default를 준 상황
  //   console.log("body", body);
  console.log("ask", ask);
  const response = await groq.chat.completions.create({
    messages: [{ role: "user", content: ask }],
    model,
  });
  //   res.json({ msg: "GroqAI" });
  res.json({ msg: response.choices[0].message.content });
});

app.listen(PORT, () => {
  console.log(`PORT ${PORT} has been connected.`);
});
