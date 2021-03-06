import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import { UserRoles } from '../interfaces/userInterface';

const NAMESPACE = 'Auth ADMIN';

const extractAdminJWT = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Validating admin token');

    let token = req.headers.authorization?.split(' ')[1];

    if (token) {
        jwt.verify(token, config.token.secret, (error, decoded) => {
            if (error) {
                return res.status(404).json({
                    message: 'invalid token ' + error.message,
                    error
                });
            } else {
                res.locals.jwt = decoded;
                if (decoded['roles'] && decoded['roles'].split('/').includes(UserRoles.ADMIN)) {
                    next();
                } else {
                    return res.status(401).json({
                        message: 'Unauthorized'
                    });
                }
            }
        });
    } else {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
};

export default extractAdminJWT;
