import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const config = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function getChatResult({ messages }) {
	const chatCompletion = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages,
	});
	console.log(chatCompletion.data.choices[0].message);
}

const messages = [{ role: "user", content: "Hello world" }];
getChatResult({ messages });
