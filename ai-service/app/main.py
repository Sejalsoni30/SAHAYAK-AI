from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import ragRouter

app = FastAPI(title="Sahayak-AI RAG Microservice", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register RAG router
app.include_router(ragRouter.router, prefix="/api/rag", tags=["RAG"])

@app.get("/")
def health_check():
    return {"status": "Python AI RAG Service running successfully"}