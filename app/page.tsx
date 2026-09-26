"use client";
import { generateTextAction } from "@/app/actions/AiActions";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [prompt, setPrompt] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const handleSendPrompt = async () => {
    const response = await generateTextAction(prompt);
    setOutput(response);
    setPrompt("");
  };

  return (
    <main className="flex w-screen h-screen flex-col items-center px-24 overflow-auto">
      <div className="w-full flex-1 overflow-y-auto pt-6 pb-32 min-h-0  no-scrollbar">
        {output && (
          <div className="prose prose-invert max-w-none overflow-x-auto">
            <h1 className="text-2xl font-bold mb-4">AI Response</h1>
            <ReactMarkdown>{output}</ReactMarkdown>
          </div>
        )}
      </div>

      <div className="input-area fixed bottom-[5%] left-0 px-24 py-4 flex items-center justify-between w-full bg-neutral-900 border-t border-neutral-700">
        <input
          placeholder="Type your message here..."
          type="text"
          className="border p-2 rounded-md w-[80%] outline-none bg-neutral-800 text-white"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          onClick={handleSendPrompt}
          className="bg-neutral-700 text-white p-2 rounded-md ml-4 w-[18%] cursor-pointer"
        >
          Send
        </button>
      </div>
    </main>
  );
}
