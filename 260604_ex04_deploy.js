//디펜던시
require ("dotenv").config();
const express = require("express");
const {GoogleGenAI} = require("@google/genai");
const GroqAI = require("groq-sdk");
const path = require("path");

//전역 변수
const app = express();
const google = new GoogleGenAI({apiKey: process.env.GOOGLE_API_KEY});
const groq = new GroqAI({apiKey: process.env.GROQ_API_KEY});

app.use(express.json());

app.use(
    express.static(path.join(__dirname,"public"))
);

app.post("/chat", async (req, res) => {
  // 입력 (JSON)
  const { provider, model, ask } = req.body;
  // 로직 (AI Provider)
  let result;
  switch (true) {
    case provider === "Google":
      console.log("Google 제공자 요청");
      result = await useGoogle(model, ask);
      break;
    case provider === "Groq":
      console.log("Groq 제공자 요청");
      result = await useGroq(model, ask);
      break;
    default:
      console.log("잘못된 Provider");
      res.status(404).json({ msg: "존재하지 않는 Provider" });
      return;
  }
  // 출력 (JSON)
  res.json({
    result,
  });
});

async function useGoogle(model, ask) {
  const response = await google.models.generateContent({
    model, // 못 쓰는 모델은 예외처리될 예정
    contents: ask,
  });
  return response.text;
}

async function useGroq(model, ask) {
    const response = await groq.chat.completions.create({
        messages: [{ role: "user", content: ask }],
        model,
    });
    return response.choices[0].message.content;
}

app.listen(PORT, ()=>{
    console.log(`${PORT} has been connected.`);
})