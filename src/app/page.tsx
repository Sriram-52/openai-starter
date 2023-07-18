"use client";

import { useChat } from "ai/react";
import { useState } from "react";

export default function ChatPage() {
	const { messages, handleInputChange, handleSubmit } = useChat();
	const [message, setMessage] = useState("");

	return (
		<div className="flex flex-col h-screen justify-between px-3">
			<div className="flex justify-center items-center bg-gray-200 p-4">
				<h1 className="text-2xl font-bold">Chat</h1>
			</div>
			<div className="flex-grow bg-gray-100 p-4 overflow-y-auto">
				{messages.map((message, index) => (
					<div
						key={message.id}
						className={`${
							index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
						} p-2 my-2 rounded-md`}
					>
						<pre className="overflow-x-auto">
							<code className="rounded-lg p-4 whitespace-pre-wrap">
								{message.content}
							</code>
						</pre>

						<div className="text-xs text-gray-500">
							{message.role} - {message.createdAt?.toISOString()}c p
						</div>
					</div>
				))}
			</div>
			<form
				onSubmit={(e) => {
					handleSubmit(e);
					setMessage("");
				}}
				className="p-4 bg-gray-200"
			>
				<input
					autoComplete="off"
					type="text"
					name="message"
					value={message}
					onChange={(e) => {
						handleInputChange(e);
						setMessage(e.target.value);
					}}
					className="w-full p-2 rounded-md"
					placeholder="Type your message..."
				/>
				<button
					type="submit"
					className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
				>
					Send
				</button>
			</form>
		</div>
	);
}
