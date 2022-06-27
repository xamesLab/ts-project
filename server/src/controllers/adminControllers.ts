import logging from '../config/logging';
import { NextFunction, Request, Response } from 'express';
import { User } from '../models/userModel';

const NAMESPACE = 'Admin Controller';

class AdminController {
    async setUserStatus(req: Request, res: Response, next: NextFunction) {
        logging.info(NAMESPACE, 'user to archive');
        let { username, active = false } = req.body;

        const newStatus = await User.findOneAndUpdate({ username }, { active }, { new: true }).exec();

        if (newStatus) {
            return res.status(200).json({
                status: 'update',
                message: newStatus
            });
        } else {
            return res.status(400).json({
                status: 'profile not found',
                message: newStatus
            });
        }
    }

    async deleteUser(req: Request, res: Response, next: NextFunction) {
        logging.info(NAMESPACE, 'delete user');
        let { username } = req.body;

        const result = await User.deleteOne({ username }).exec();

        if (result) {
            return res.status(200).json({
                status: 'delete',
                message: result
            });
        } else {
            return res.status(400).json({
                status: 'profile not found',
                message: result
            });
        }
    }
}

export default {
    adminController: new AdminController()
};
