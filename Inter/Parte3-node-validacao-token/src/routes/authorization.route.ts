import { NextFunction, Request, Response, Router } from "express";
import JWT, { SignOptions } from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";
import basicAuthenticationMiddleware from "../middlewares/basic-authentication.middlerware";
import ForbiddenError from "../models/errors/forbidden.error.model";
import jwtAthenticationMiddlewar from "../middlewares/jwt-authentication.middleware";

const authorizationRoute = Router();

authorizationRoute.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user;

        if(!user) {
            throw new ForbiddenError('Usuário não informado!');
        }

        const jwtPayload = {username: user.username};
        const jwtOption: SignOptions = { subject: user?.uuid, expiresIn: '15m' };
        const secretKey = 'my_secret_key';

        const jwt = JWT.sign(jwtPayload, secretKey, jwtOption);

        res.status(StatusCodes.OK).json({ token: jwt });
        
    } catch (error) {
        next(error);
    }
});

authorizationRoute.post('/token/validate', jwtAthenticationMiddlewar, (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
});

export default authorizationRoute;