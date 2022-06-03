import logging from '../config/logging';
import { NextFunction, Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import User from '../models/userModel';
import mongoose from 'mongoose';
import signJWT from '../utils/signJWT';

const NAMESPACE = 'User Controller';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Token validated, user authorized');

    return res.status(200).json({
        message: 'authorized'
    });
};
const register = (req: Request, res: Response, next: NextFunction) => {
    let { username, password } = req.body;

    bcryptjs.hash(password, 10, (hashError, hash) => {
        if (hashError) {
            return res.status(500).json({
                message: hashError.message,
                error: hashError
            });
        }

        const _user = new User({
            _id: new mongoose.Types.ObjectId(),
            username,
            password: hash
        });

        return _user
            .save()
            .then((user) => {
                return res.status(201).json({
                    user
                });
            })
            .catch((e) => {
                return res.status(500).json({
                    message: e.message,
                    e
                });
            });
    });
};

const login = (req: Request, res: Response, next: NextFunction) => {
    let { username, password } = req.body;

    User.find({ username })
        .exec()
        .then((users) => {
            if (users.length !== 1) {
                return res.status(401).json({
                    message: 'Unauthorized'
                });
            }

            bcryptjs.compare(password, users[0].password, (error, result) => {
                if (error || !result) {
                    if (error) logging.error(NAMESPACE, error.message, error);
                    logging.error(NAMESPACE, 'not compare password');
                    return res.status(401).json({
                        message: 'Unauthorized'
                    });
                } else if (result) {
                    signJWT(users[0], (_error, token) => {
                        if (_error) {
                            logging.error(NAMESPACE, 'Unable to sign token', _error);
                            return res.status(401).json({
                                message: 'Unauthorized',
                                error: _error
                            });
                        } else if (token) {
                            return res.status(201).json({
                                message: 'Authorized',
                                token,
                                user: users[0]
                            });
                        }
                    });
                }
            });
        })
        .catch((e) => {
            return res.status(500).json({
                message: e.message,
                e
            });
        });
};

const getAllUser = (req: Request, res: Response, next: NextFunction) => {
    User.find()
        .select('-password')
        .exec()
        .then((users) => {
            return res.status(200).json({
                users,
                count: users.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getUser = (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;

    User.find({ username: user })
        .select('-password')
        .exec()
        .then((user) => {
            if (user.length !== 0) {
                return res.status(200).json({
                    user
                });
            } else {
                return res.status(401).json({
                    message: 'User not faund'
                });
            }
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const unlogin = (req: Request, res: Response, next: NextFunction) => {};

export default { validateToken, register, login, unlogin, getUser, getAllUser };
