import { Router, Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { secret } from "../server/config";

const protectedRouter: Router = Router();

protectedRouter.use((request: Request & { headers: { auth: string } }, response: Response, next: NextFunction) => {
    const token = request.headers.auth;

    verify(token, secret, function(tokenError) {
        if (tokenError) {
            return response.status(403).json({
                message: "Invalid token, please Log in first"
            });
        }

        next();
    });
});

protectedRouter.get("/", (request: Request, response: Response) => {
    response.json({
        text: "Greetings, you have valid token.",
        title: "Protected call"
    });
});

export { protectedRouter }





