import hashlib

def generate_embedding(text: str) -> list:
    """Lightweight mock embedding generator for hackathon stability without heavy DLL dependencies."""
    # Creates a stable 1536-dimensional float vector matching Supabase vector expectations
    hasher = hashlib.sha256(text.encode())
    hash_bytes = hasher.digest()
    
    # Expand or loop bytes to fill 1536 dimensions
    vector = []
    for i in range(1536):
        byte_val = hash_bytes[i % len(hash_bytes)]
        vector.append(float(byte_val) / 255.0)
    
    return vector