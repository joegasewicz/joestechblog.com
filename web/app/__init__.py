from bobtail import Bobtail
from bobtail_logger import BobtailLogger, Colors
from bobtail_cors import BobtailCORS
from bobtail_upload import BobtailUpload
from bobtail_jinja2 import BobtailJinja2

from app.routes import (
    HomeRoute,
)


routes = [
    (HomeRoute(), ["/"]),
]


def make_app() -> Bobtail:
    bobtail = Bobtail(routes=routes)

    # Middleware
    bobtail.use(BobtailLogger(colors={"color", Colors.BLUE}))
    bobtail.use(BobtailCORS(options={}))
    bobtail.use(BobtailUpload(options={"UPLOAD_DIR": "uploads"}))
    bobtail.use(BobtailJinja2(template_dir="app"))

    return bobtail
