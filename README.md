# INDUX 5.0

A full-stack AI-powered government scheme assistant platform with a React frontend, Express backend, and Python FastAPI RAG service.

## Project structure

- `client/` — React + Vite frontend
- `server/` — Express API backend
- `ai-service/` — Python FastAPI RAG + retrieval layer

## Quick start

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

### AI service

```bash
cd ai-service
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Notes

- Configure `.env` files for Supabase, JWT secret, and Gemini/OpenAI keys.
- The frontend and backend are scaffolded to support scheme search, authentication, chat, and application flows.
