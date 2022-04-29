from starlette.applications import Starlette
from db import database
import endpoints

app = Starlette(
    debug=True,
    routes=endpoints.routes,
    on_startup=[database.connect],
    on_shutdown=[database.disconnect]
)
