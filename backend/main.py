from starlette.applications import Starlette
from starlette.responses import JSONResponse
from starlette.routing import Route

async def health(request):
    return JSONResponse({'healthy': True})

app = Starlette(debug=True, routes=[
    Route('/health', health)
])
