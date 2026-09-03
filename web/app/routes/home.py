from bobtail import AbstractRoute, Request
from bobtail_jinja2 import BobtailJinja2, Response


class HomeRoute(AbstractRoute):
    def get(self, req: Request, res: Response) -> None:
        res.jinja2.render(res, "routes/home.jinja2", data={})

    def post(self, req: Request, res: Response) -> None:
        pass

    def put(self, req: Request, res: Response) -> None:
        pass

    def delete(self, req: Request, res: Response) -> None:
        pass
