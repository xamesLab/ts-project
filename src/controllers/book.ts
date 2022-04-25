import logging from '../config/logging';
import {NextFunction, Request, Response} from 'express'
import mongoose from 'mongoose';
import Book from '../models/book'

const NAMESPACE = 'Book Controller';

const createBook = (req:Request, res:Response, next:NextFunction) => {
    let {author, title} = req.body

    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        author,
        title
    })

    return book.save()
    .then((results)=>{
        logging.info(NAMESPACE, `create new Book`);
        return res.status(200).json({
            books:results
        })
    })
    .catch((error)=>{
        return res.status(500).json({
            message: error.message,
            error
        })
    })
};

const getAllBooks = (req:Request, res:Response, next:NextFunction) => {
    Book.find()
    .exec()
    .then((results)=>{
        logging.info(NAMESPACE, `getAll Books`);
        return res.status(200).json({
            books:results,
            count: results.length
        })
    })
    .catch((error)=>{
        return res.status(500).json({
            message: error.message,
            error
        })
    })
};

export default { getAllBooks, createBook };
