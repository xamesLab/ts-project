import express from 'express';
import controller from '../controllers/futuresController';

const router = express.Router();

router.get('/time', controller.time);
router.get('/ping', controller.ping);
router.get('/info', controller.info);
router.get('/last-prices', controller.lastPrice);
router.post('/order-book', controller.orderBook);
router.post('/candles', controller.candles);
router.post('/agg-trades', controller.aggTrades);
router.post('/daily-stats', controller.dailyStats);

export default router;
