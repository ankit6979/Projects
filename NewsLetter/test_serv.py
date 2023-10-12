from fastapi import FastAPI
from fastapi.middleware.gzip import GZipMiddleware

app = FastAPI()
app.add_middleware(GZipMiddleware)


@app.on_event("startup")
async def create_db_client():
    pass


@app.get('/api/v3/user')
async def get_periods():
    return "This is the user"
