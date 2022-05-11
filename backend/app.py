from starlette.applications import Starlette
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

import config
import uvicorn
import db
import endpoints

middleware = [
    Middleware(
        CORSMiddleware,
        allow_origins=['*'],
        allow_headers=['*'],
        allow_methods=['*']
    )
]

app = Starlette(
    debug=True,
    routes=endpoints.routes,
    on_startup=[db.database.connect, config.fetch],
    on_shutdown=[db.database.disconnect],
    middleware=middleware
)

uvicorn.run(app, host="127.0.0.1", port=8000)
