from bobtail import Request, Response


class StaticRoute:

    def get(self, req: Request, res: Response):
        res.set_static(req.path)
