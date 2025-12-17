from supabase import create_client, Client
import os
from decouple import config

SUPABASE_URL = config("SUPABASE_URL")
SUPABASE_KEY = config("SUPABASE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)