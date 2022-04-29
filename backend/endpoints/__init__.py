from db import models, database
from util import parseNotificationType
from starlette.responses import JSONResponse
from starlette.requests import Request
from starlette.routing import Route

import drink, settings


async def health(request: Request):
    return JSONResponse({'healthy': True})

routes = [
    Route('/health', endpoint=health),
    Route('/drink/edit', endpoint=drink.edit, methods=['POST']),
    Route('/settings/edit', endpoint=settings.edit, methods=['POST'])
]
