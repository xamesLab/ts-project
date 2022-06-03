import express from 'express';
import controller from '../controllers/futuresController';

const router = express.Router();

router.get('/time', controller.time);
router.get('/ping', controller.ping);
router.get('/info', controller.info);
router.post('/order-book', controller.orderBook);
router.post('/candles', controller.candles);

export default router;
