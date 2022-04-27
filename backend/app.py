from starlette.applications import Starlette
from starlette.routing import Route
from db import Base, database

import endpoints

app = Starlette(
    debug=True,
    routes=[ 
        Route('/health', endpoints.health),
        Route('/edit', endpoint=endpoints.edit, methods=['POST'])
    ],
    on_startup=[database.connect],
    on_shutdown=[database.disconnect]
)
