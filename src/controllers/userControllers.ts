import logging from '../config/logging';
import {NextFunction, Request, Response} from 'express'
import bcryptjs, { hash } from 'bcryptjs'

const NAMESPACE = 'User Controller';

const validateToken = (req:Request, res:Response, next:NextFunction) => {
    logging.info(NAMESPACE, "Token validated, user authorized")

    return res.status(200).json({
        message:'authorized'
    })
}
const register = (req:Request, res:Response, next:NextFunction) => {
    let {username, password} = req.body

    bcryptjs.hash(password, 10, (hashError, hash)=>{
        if(hashError){
            return res.status(500).json({
                message: hashError.message,
                error: hashError
            })
        }
        return res.status(200).json({
            user:username,
            cryptoPass:hash
        })
    })
}
const login = (req:Request, res:Response, next:NextFunction) => {}
const unlogin = (req:Request, res:Response, next:NextFunction) => {}
const getUser = (req:Request, res:Response, next:NextFunction) => {}
const getAllUser = (req:Request, res:Response, next:NextFunction) => {}

export default { validateToken, register, login, unlogin, getUser, getAllUser };
