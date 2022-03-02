import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import JWT from "jsonwebtoken";
import userRepository from "../repositories/user.repository";


async function jwtAthenticationMiddlewar(req: Request, res: Response, next: NextFunction) {
    try {

        const authorizationHeader = req.headers['authorization'];

        if (!authorizationHeader) {
            throw new ForbiddenError('Credenciais não informadas');
        }

        const [authenticationType, token] = authorizationHeader.split(' ');

        if (authenticationType !== 'Bearer' || !token) {
            throw new ForbiddenError('Tipo de authenticação inválido');          
        }

        try {
            const tokenPayload = JWT.verify(token, 'my_secret_key');
    
            if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
                throw new ForbiddenError('Token Inválido');
            }
    
            const user = { uuid: tokenPayload.sub, username: tokenPayload.username };
            req.user = user;
            next();
            
        } catch (error) {
            throw new ForbiddenError('Token Inválido');
        }

    } catch (error) {
        next(error)
    }

};

export default jwtAthenticationMiddlewar;