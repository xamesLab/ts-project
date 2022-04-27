import logging from '../config/logging';
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

const NAMESPACE = 'Users Controller';

const validateToken = (req: Request, res: Response, next: NextFunction) => {};
const register = (req: Request, res: Response, next: NextFunction) => {};
const login = (req: Request, res: Response, next: NextFunction) => {};
const unLogin = (req: Request, res: Response, next: NextFunction) => {};
const getAllUsers = (req: Request, res: Response, next: NextFunction) => {};
const getUser = (req: Request, res: Response, next: NextFunction) => {};

export default { getAllUsers, validateToken, register, login, unLogin, getUser };
