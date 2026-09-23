<div align="center">
  <img src="https://img.icons8.com/color/96/000000/bot.png" alt="Sahayak-AI Logo" width="80" />
  <h1>Sahayak-AI</h1>
  <p><strong>Your Multilingual Public Service Assistant</strong></p>
  <p>
    A full-stack AI-powered government scheme assistant platform providing citizens with trusted, localized, and source-backed access to government services.
  </p>
  
  [![React](https://img.shields.io/badge/React-18.2.0-blue.svg?style=flat&logo=react)](https://reactjs.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg?style=flat&logo=nodedotjs)](https://nodejs.org/)
  [![FastAPI](https://img.shields.io/badge/FastAPI-Python-009688.svg?style=flat&logo=fastapi)](https://fastapi.tiangolo.com/)
  [![Supabase](https://img.shields.io/badge/Database-Supabase-3ECF8E.svg?style=flat&logo=supabase)](https://supabase.com/)
</div>

<br/>

## 🌟 Overview

Navigating government schemes and public services can often be complex and confusing. **Sahayak-AI** acts as an intelligent, multilingual bridge between citizens and government resources. By leveraging advanced Retrieval-Augmented Generation (RAG) models, it ensures that every piece of information provided is strictly accurate and directly backed by verified government sources.

### ✨ Key Features
- **🌐 Multilingual Support:** Interact with the AI assistant in 5+ Indian languages (Hindi, English, Marathi, Bengali, Tamil).
- **🤖 RAG-Powered AI Chat:** Get precise, hallucination-free answers using advanced vector embeddings and Large Language Models.
- **📚 Scheme Directory:** Explore an extensive, searchable directory of verified government schemes and eligibility criteria.
- **🔐 Secure Authentication:** Seamless user onboarding and profile management powered by Supabase.

---

## 🏗️ Architecture

The platform is structured as a modern, decoupled microservices architecture:

- **`client/` (Frontend):** A responsive, accessible single-page application built with React, Vite, and TailwindCSS.
- **`server/` (Backend):** A Node.js Express API that handles user authentication, scheme management, application routing, and business logic.
- **`ai-service/` (AI Engine):** A Python FastAPI service responsible for semantic search, document retrieval, and LLM orchestration (RAG).

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
- Node.js (v18+)
- Python (v3.9+)
- PostgreSQL / Supabase account
- Gemini API Key

### 1. Setup the Frontend (Client)

```bash
cd client
npm install
npm run dev
```
*The frontend will run at `http://localhost:5173`*

### 2. Setup the Backend API (Server)

```bash
cd server
npm install
npm run dev
```
*The backend will run at `http://localhost:5001`*

### 3. Setup the AI Engine (Python FastAPI)

```bash
cd ai-service
python -m venv venv

# Activate the virtual environment:
# On Windows: venv\Scripts\activate
# On Mac/Linux: source venv/bin/activate

pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```
*The AI service will run at `http://localhost:8000`*

---

## ⚙️ Environment Configuration

You will need to configure `.env` files in all three directories (`client`, `server`, and `ai-service`). 

### Example `server/.env`
```env
PORT=5001
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_role_key
JWT_SECRET=your_jwt_secret
```

### Example `ai-service/.env`
```env
GEMINI_API_KEY=your_gemini_key
```

### Example `client/.env`
```env
VITE_API_URL=http://localhost:5001/api
```

---

## 🛡️ License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
