---
title: "Log Insights Platform"
subtitle: "AI-Driven System Analysis"
role: "Architect & Lead Developer"
duration: "3 Months"
stats: "RAG Implementation"
technologies: ["Python", "Flask", "React", "Ollama", "ChromaDB"]
githubUrl: "https://github.com/GoBhargavi/log-insights-platform"
---

## The Challenge
Modern enterprise systems generate millions of log lines daily. Sifting through this data to find root causes or patterns is a monumental task for engineering teams. The goal was to build a system that can "understand" logs and provide high-level insights using AI.

## The Solution
I architected a platform that leverages **Retrieval-Augmented Generation (RAG)** to index technical logs and allow engineers to query them in natural language.

### Key Innovations
- **Log Vectorization**: Used SentenceTransformers to convert raw logs into vector embeddings stored in ChromaDB.
- **Contextual Retrieval**: Implemented a similarity search that retrieves the most relevant log contexts for any given technical query.
- **AI Synthesis**: Integrated local LLMs (via Ollama) to summarize retrieved logs and suggest potential fixes.

## Results
- **90% faster** root cause analysis for indexed incidents.
- **Zero data egress**: Entire system runs locally, ensuring security of sensitive log data.
- **Automated Tagging**: System learns to categorize incident types based on historical log patterns.

```python
# Example of the RAG retrieval logic
def query_log_context(query_text, n_results=5):
    results = collection.query(
        query_texts=[query_text],
        n_results=n_results
    )
    return results['documents']
```
