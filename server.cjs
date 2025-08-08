
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const API_KEY = process.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("GEMINI_API_KEY is not defined in environment variables.");
}

const genAI = new GoogleGenerativeAI(API_KEY);

app.post('/api/generate-effect-description', async (req, res) => {
  try {
    const { effectName } = req.body;
    if (!effectName) {
      return res.status(400).send('effectName is required');
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Provide a concise and engaging description for the 3D visual effect: ${effectName}. Focus on what the effect does visually and its common applications in 3D graphics or games. Keep it to 2-3 sentences.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.send({ description: text });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating effect description');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
