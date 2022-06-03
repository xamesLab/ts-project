import futuresService from '../services/futuresService';
import logging from '../config/logging';
import { NextFunction, Request, Response } from 'express';

import { CandlesOptions } from 'binance-api-node';
import { IAggTrades, ILiquidationOrders } from '../interfaces/futuresInterfaces';

const NAMESPACE = 'Futures Controller';

const time = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Server time response');

    futuresService
        .time()
        .then((time) => {
            return res.status(200).json({
                message: time
            });
        })
        .catch((e) => {
            return res.status(500).json({
                message: e.message,
                e
            });
        });
};

const ping = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Server time response');

    futuresService
        .ping()
        .then((ping) => {
            return res.status(200).json({
                message: ping
            });
        })
        .catch((e) => {
            return res.status(500).json({
                message: e.message,
                e
            });
        });
};

const info = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Server info response');

    futuresService
        .info()
        .then((info) => {
            return res.status(200).json({
                message: info
            });
        })
        .catch((e) => {
            return res.status(500).json({
                message: e.message,
                e
            });
        });
};

const lastPrice = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Server lastPrice response');

    futuresService
        .lastPrice()
        .then((price) => {
            return res.status(200).json({
                message: price
            });
        })
        .catch((e) => {
            return res.status(500).json({
                message: e.message,
                e
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
        .then((candle) => {
            return res.status(200).json({
                message: candle
            });
        })
        .catch((e) => {
            return res.status(500).json({
                message: e.message,
                e
            });
        });
};

// If both startTime and endTime are sent, limit should not be sent AND the distance between startTime and endTime must be less than 24 hours.
const aggTrades = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Server futuresTrade response');

    const baseAsset = req.body.base || 'btc';
    const quoteAsset = 'usdt';

    const params: IAggTrades = { symbol: baseAsset.toUpperCase() + quoteAsset.toUpperCase() };

    if (req.body.limit) params.limit = req.body.limit;
    if (req.body.fromId) params.fromId = req.body.fromId;
    if (req.body.startTime) params.startTime = req.body.startTime;
    if (req.body.endTime) params.endTime = req.body.endTime;

    futuresService
        .aggTrades(params)
        .then((trade) => {
            return res.status(200).json({
                message: trade
            });
        })
        .catch((e) => {
            return res.status(500).json({
                message: e.message,
                e
            });
        });
};

const liquidationOrders = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Server liquidations response');

    let params: ILiquidationOrders = {};

    if (req.body.base) {
        const baseAsset = req.body.base;
        const quoteAsset = 'usdt';
        params.symbol = baseAsset.toUpperCase() + quoteAsset.toUpperCase();
    }

    if (req.body.limit) params.limit = req.body.limit;
    if (req.body.startTime) params.startTime = req.body.startTime;
    if (req.body.endTime) params.endTime = req.body.endTime;

    futuresService
        .liquidationOrders()
        .then((trade) => {
            return res.status(200).json({
                message: trade
            });
        })
        .catch((e) => {
            return res.status(500).json({
                message: e.message,
                e
            });
        });
};

const dailyStats = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Server futuresDailyStats response');

    let params: { symbol?: string } = {};

    if (req.body.base) {
        const baseAsset = req.body.base;
        const quoteAsset = 'usdt';
        params = { symbol: baseAsset.toUpperCase() + quoteAsset.toUpperCase() };
    }

    futuresService
        .dailyStats(params)
        .then((trade) => {
            return res.status(200).json({
                message: trade
            });
        })
        .catch((e) => {
            return res.status(500).json({
                message: e.message,
                e
            });
        });
};

export default { time, ping, info, lastPrice, orderBook, candles, aggTrades, dailyStats, liquidationOrders };
