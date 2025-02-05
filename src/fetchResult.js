import { GoogleGenerativeAI } from "@google/generative-ai";

async function generateContent(prompt) {
    const API_KEY = "<ENTER_API_KEY_HERE>";
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
        const result = await model.generateContent([prompt]);
        return result.response.text();
    } catch (error) {
        console.error("Error generating content:", error);
        return '';
    }
}

export default generateContent