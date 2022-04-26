import jwt from 'jsonwebtoken'
import config from '../config/config'
import logging from '../config/logging'
import IUser from '../interfaces/userInterface'

const NAMESPACE = 'signJWT'

const signJWT = (user:IUser, callback: (error:Error | null, token: string | null)=>void):void => {
    var timeSinch = new Date().getTime()
    var expirationTime = timeSinch + Number(config.token.expireTime)*100000
    var expirationTimeSec = Math.floor(expirationTime/1000)

    logging.info(NAMESPACE, `Attempting to sign token for ${user.username}`)

    try {
        jwt.sign({
            username: user.username
        },
        config.token.secret,
        {
            issuer: config.token.issuer,
            algorithm: 'HS256',
            expiresIn: expirationTimeSec
        },
        (error, token)=>{
            if(error){
                callback(error, null)
            } else if(token){
                callback(null, token)
            }
        })
    } catch(e){
        logging.error(NAMESPACE, e.message, e)
        callback(e, null)
    }
}

export default signJWT