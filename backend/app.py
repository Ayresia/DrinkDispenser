import db

if __name__ == "__main__":
    from starlette.applications import Starlette
    from starlette.middleware import Middleware
    from starlette.middleware.cors import CORSMiddleware
    from threading import Thread

    import config
    import uvicorn
    import endpoints
    import gpio

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

    Thread(target=gpio.setup()).run()
    uvicorn.run(app, host="0.0.0.0", port=8000)
