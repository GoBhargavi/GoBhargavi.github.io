---
title: "Enterprise Chat: Reducing Support Tickets by 40% with RAG"
description: "Orchestrating a context-aware conversational interface for enterprise support workflows using vector search."
date: "2024-05-10"
technologies: ["React", "FastAPI", "PostgreSQL (pgvector)", "LangChain", "OpenAI"]
role: "Lead Architect"
impact: "40% Support Ticket Reduction | 98% CSAT"
heroImage: "/images/chat-hero.png"
---

## The Challenge
Our enterprise support team was overwhelmed. **60% of incoming tickets** were routine questions about system configurations or policy, yet they required manual triage. Existing chatbots were rigid, rule-based systems that frustrated users with "I don't understand" responses.

We needed a system that could understand nuance, access our internal knowledge base dynamically, and provide accurate, citation-backed answers to deflect routine inquiries.

## The Solution
I architected and deployed an **Enterprise Chat System** leveraging **Retrieval-Augmented Generation (RAG)**. This allowed the LLM to "read" our internal documentation before answering, ensuring accuracy and reducing hallucinations.

### System Architecture

1.  **Ingestion Pipeline**: 
    A Python service that scrapes internal Confluence pages and PDFs, chunks them into semantic segments, and generates embeddings using OpenAI's `text-embedding-3-small` model.

2.  **Vector Database**:
    We stored these embeddings in **pgvector** (PostgreSQL extension), allowing for efficient similarity search alongside our relational transactional data.

3.  **RAG Orchestrator**:
    A **FastAPI** backend that receives user queries, retrieves relevant context from pgvector, and constructs a prompt for the LLM.

### Code Snippet: Semantic Retrieval
Here is the core logic for retrieving context-aware documents before generation:

```python
# fastapi_service.py
async def retrieve_context(query: str, limit: int = 5):
    query_embedding = await openai_client.embeddings.create(
        input=query, model="text-embedding-3-small"
    )
    
    # Cosine similarity search in Postgres
    results = await db.execute(
        text("""
            SELECT content, 1 - (embedding <=> :emb) as similarity
            FROM documents
            ORDER BY similarity DESC
            LIMIT :limit
        """),
        {"emb": query_embedding.data[0].embedding, "limit": limit}
    )
    
    return [row.content for row in results]
```

## Challenges & Optimizations

*   **Latency**: Initial RAG responses took 3-5 seconds. I optimized this by implementing **semantic caching** (Redis) for frequent queries, reducing average latency to <1.5s for 40% of requests.
*   **Accuracy**: To prevent "hallucinations," I implemented a **citation mechanism**. The UI highlights the exact source document used to generate the answer, building trust with enterprise users.

## Impact
*   **Efficiency**: Support ticket volume dropped by **40%** within the first quarter as users found answers instantly.
*   **User Satisfaction**: CSAT scores for automated support interactions rose from 65% to **98%**.
*   **Scalability**: The system now handles thousands of concurrent queries without degrading performance, thanks to async Python architecture.

## Why This Matters
This project wasn't just about using AI; it was about **operational efficiency**. By automating the routine, we freed up our human support agents to tackle complex, high-value customer problems.
