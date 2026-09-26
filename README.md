# AI Chat - Next.js

A simple, clean chat interface for interacting with Google's Gemini AI, built with Next.js App Router and TypeScript.

## Features

- Real-time chat interface with a fixed input bar
- Powered by Google's Gemini API (@google/genai)
- Markdown rendering for AI responses (headings, bold, code blocks)
- Server Actions for secure, server-side API calls (no exposed API keys)
- Dark-themed, responsive UI with Tailwind CSS

## Tech Stack

- Framework: Next.js 16 (App Router, Turbopack)
- Language: TypeScript
- Styling: Tailwind CSS
- AI: Google Gemini API via @google/genai
- Markdown: react-markdown

## Getting Started

### Prerequisites

- Node.js 18+
- A Google Gemini API key (get one at https://aistudio.google.com/app/apikey)

### Installation

1. Clone the repo

git clone https://github.com/your-username/ai-chat-nextjs.git
cd ai-chat-nextjs

2. Install dependencies

npm install

3. Set up environment variables

Create a .env file in the root directory and add:

GOOGLE_GENAI_API_KEY=your_api_key_here

4. Run the development server

npm run dev

5. Open http://localhost:3000 in your browser

## Project Structure

app/
actions/
AiActions.ts - Server action calling the Gemini API
page.tsx - Main chat UI
globals.css - Global styles

## How It Works

The UI sends the user's prompt to a Next.js Server Action (generateTextAction), which calls Google's Gemini API server-side, keeping the API key secure and never exposed to the client. The AI's markdown-formatted response is rendered using react-markdown.
