def clean_and_chunk_text(raw_text: str, chunk_size: int = 500) -> list:
    """Splits raw official scheme text into semantic chunks for vector indexing."""
    words = raw_text.split()
    chunks = []
    for i in range(0, len(words), chunk_size):
        chunk = " ".join(words[i:i + chunk_size])
        chunks.append(chunk)
    return chunks