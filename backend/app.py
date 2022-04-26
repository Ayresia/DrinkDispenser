from databases import Database
from starlette.applications import Starlette
from starlette.responses import JSONResponse
from starlette.routing import Route
from db import Base
from db.models import *

DATABASE_URL = 'sqlite:///database.db'
database = Database(DATABASE_URL)

async def health(request):
    return JSONResponse({'healthy': True})

app = Starlette(
    debug=True,
    routes=[ Route('/health', health)],
    on_startup=[database.connect],
    on_shutdown=[database.disconnect]
)
