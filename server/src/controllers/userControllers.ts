import logging from '../config/logging';
import { NextFunction, Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import { User, Profile, Key } from '../models/userModel';
import mongoose from 'mongoose';
import { signJWT, decodeUsernameJWT } from '../utils/signJWT';
import jwt from 'jsonwebtoken';

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

const getProfile = async (req: Request, res: Response, next: NextFunction) => {
    const decodeToken = jwt.decode(req.headers.authorization.split(' ')[1], { json: true });
    const username = decodeToken.username;
    const user = await User.find({ username }).select('_id').exec();
    // .find({ username: decodeToken.username })

    Profile.find({ userid: user[0]._id })
        .exec()
        .then((profile) => {
            if (profile.length !== 0) {
                return res.status(200).json({
                    message: profile
                });
            } else {
                return res.status(401).json({
                    message: 'Profile not faund'
                });
            }
        });
};

const getAllProfile = async (req: Request, res: Response, next: NextFunction) => {
    Profile.find()
        .exec()
        .then((profile) => {
            if (profile.length !== 0) {
                return res.status(200).json({
                    message: profile
                });
            } else {
                return res.status(401).json({
                    message: 'Profiles not faund'
                });
            }
        });
};

const updateProfile = async (req: Request, res: Response, next: NextFunction) => {
    const decodeToken = jwt.decode(req.headers.authorization.split(' ')[1], { json: true });
    const username = decodeToken.username;
    const user = await User.find({ username }).select('_id').exec();

    console.log(username);

    const newProfile = await Profile.findOneAndUpdate({ userid: user[0]._id }, { pubkey: '333' }, { new: true }).exec();

    if (newProfile) {
        return res.status(200).json({
            status: 'update',
            message: newProfile
        });
    } else {
        return res.status(400).json({
            status: 'profile not found',
            message: newProfile
        });
    }
};

const createProfile = async (req: Request, res: Response, next: NextFunction) => {
    const decodeToken = jwt.decode(req.headers.authorization.split(' ')[1], { json: true });
    const username = decodeToken.username;
    const user = await User.find({ username }).select('_id').exec();

    const profile = await Profile.findOne({ userid: user[0]._id }).exec();

    if (profile) {
        return res.status(200).json({
            status: 'is found',
            message: profile
        });
    } else {
        const _profile = new Profile({
            _id: new mongoose.Types.ObjectId(),
            userid: user[0]._id,
            name: username,
            email: '',
            pubkey: ''
        });
        _profile.save().then((profile) => {
            return res.status(201).json({
                status: 'create',
                profile
            });
        });
    }
};

const deleteProfile = async (req: Request, res: Response, next: NextFunction) => {
    const decodeToken = jwt.decode(req.headers.authorization.split(' ')[1], { json: true });
    const username = decodeToken.username;
    const user = await User.find({ username }).select('_id').exec();
    const profile = await Profile.findOne({ userid: user[0]._id }).exec();

    if (!profile) {
        return res.status(200).json({
            status: 'not enything for delete'
        });
    }

    const result = await Profile.deleteMany({ userid: user[0]._id }).exec();

    return res.status(200).json({
        status: 'deleted',
        message: result
    });
};

class KeyController {
    async getKey(req: Request, res: Response, next: NextFunction) {
        const decodeToken = jwt.decode(req.headers.authorization.split(' ')[1], { json: true });
        const username = decodeToken.username;
        const user = await User.find({ username }).select('_id').exec();
        // .find({ username: decodeToken.username })

        Key.find({ userid: user[0]._id })
            .exec()
            .then((key) => {
                if (key.length !== 0) {
                    return res.status(200).json({
                        message: key
                    });
                } else {
                    return res.status(401).json({
                        message: 'key not faund'
                    });
                }
            });
    }

    async createKey(req: Request, res: Response, next: NextFunction) {
        const decodeToken = jwt.decode(req.headers.authorization.split(' ')[1], { json: true });
        const username = decodeToken.username;
        const user = await User.find({ username }).select('_id').exec();

        const key = await Key.findOne({ userid: user[0]._id }).exec();

        if (key) {
            return res.status(200).json({
                status: 'is found',
                message: key
            });
        } else {
            const _key = new Key({
                _id: new mongoose.Types.ObjectId(),
                userid: user[0]._id,
                s: 'key'
            });
            _key.save().then((key) => {
                return res.status(201).json({
                    status: 'create',
                    key
                });
            });
        }
    }

    async deleteKey(req: Request, res: Response, next: NextFunction) {
        const user = await User.find({ username: decodeUsernameJWT(req) })
            .select('_id')
            .exec();

        const key = await Key.findOne({ userid: user[0]._id }).exec();

        if (!key) {
            return res.status(200).json({
                status: 'not enything for delete'
            });
        }

        const result = await Key.deleteMany({ userid: user[0]._id }).exec();

        return res.status(200).json({
            status: 'deleted',
            message: result
        });
    }

    async updateKey(req: Request, res: Response, next: NextFunction) {
        const user = await User.find({ username: decodeUsernameJWT(req) })
            .select('_id')
            .exec();

        const newKey = await Key.findOneAndUpdate({ userid: user[0]._id }, { s: '333' }, { new: true }).exec();

        if (newKey) {
            return res.status(200).json({
                status: 'update',
                message: newKey
            });
        } else {
            return res.status(400).json({
                status: 'key not found',
                message: newKey
            });
        }
    }
}

export default {
    validateToken,
    register,
    login,
    unlogin,
    getUser,
    getAllUser,
    getProfile,
    getAllProfile,
    updateProfile,
    createProfile,
    deleteProfile,
    keyController: new KeyController()
};
