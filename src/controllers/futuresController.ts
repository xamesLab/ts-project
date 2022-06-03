import futuresService from '../services/futuresService';
import logging from '../config/logging';
import { NextFunction, Request, Response } from 'express';

import { CandlesOptions } from 'binance-api-node';

const NAMESPACE = 'Futures Controller';

const time = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Server time response');

    futuresService.time().then((time) => {
        return res.status(200).json({
            message: time
        });
    });
};

const ping = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Server time response');

    futuresService.ping().then((ping) => {
        return res.status(200).json({
            message: ping
        });
    });
};

const info = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Server info response');

    futuresService.info().then((info) => {
        return res.status(200).json({
            message: info
        });
    });
};

const orderBook = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Server futuresBook response');

    const baseAsset = req.body.base || 'btc';
    const quoteAsset = 'usdt';
    const limit = req.body.limit || 100;

    const symbol = baseAsset.toUpperCase() + quoteAsset.toUpperCase();

    futuresService
        .orderBook({ symbol, limit })
        .then((book) => {
            return res.status(200).json({
                message: book
            });
        })
        .catch((e) => {
            return res.status(500).json({
                message: e.message,
                e
            });
        });
};

const candles = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Server futuresBook response');

    const baseAsset = req.body.base || 'btc';
    const quoteAsset = 'usdt';

    const params: CandlesOptions = { symbol: baseAsset.toUpperCase() + quoteAsset.toUpperCase(), interval: '5m' };

    if (req.body.limit) params.limit = req.body.limit;
    if (req.body.interval) params.interval = req.body.interval;
    if (req.body.startTime) params.startTime = req.body.startTime;
    if (req.body.endTime) params.endTime = req.body.endTime;

    futuresService
        .candles(params)
        .then((book) => {
            return res.status(200).json({
                message: book
            });
        })
        .catch((e) => {
            return res.status(500).json({
                message: e.message,
                e
            });
        });
};

export default { time, ping, info, orderBook, candles };
