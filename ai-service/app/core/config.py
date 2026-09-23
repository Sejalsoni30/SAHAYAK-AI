import os
from dotenv import load_dotenv

load_dotenv()


def _clean(value):
    return (value or "").strip()


SUPABASE_URL = _clean(os.getenv("SUPABASE_URL"))
SUPABASE_SERVICE_ROLE_KEY = _clean(
    os.getenv("SUPABASE_SERVICE_ROLE_KEY") or os.getenv("SUPABASE_KEY")
)

if any(token in (SUPABASE_URL or "").lower() for token in ["your-project", "your_supabase", "example"]):
    SUPABASE_URL = ""

if any(token in (SUPABASE_SERVICE_ROLE_KEY or "").lower() for token in ["your-", "your_", "example"]):
    SUPABASE_SERVICE_ROLE_KEY = ""