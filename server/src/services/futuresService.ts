import Binance from 'binance-api-node';

class FuturesService {
    client = Binance();

    time() {
        return this.client.time();
    }

    ping() {
        return this.client.futuresPing();
    }

    info() {
        return this.client.futuresExchangeInfo();
    }

    lastPrice() {
        return this.client.futuresPrices();
    }

    orderBook(params) {
        return this.client.futuresBook(params);
    }

    candles(params) {
        return this.client.futuresCandles(params);
    }

    aggTrades(params) {
        return this.client.futuresAggTrades(params);
    }

    dailyStats(params) {
        return this.client.futuresDailyStats(params);
    }

    liquidationOrders() {
        return this.client.futuresAllForceOrders();
    }
}

export default new FuturesService();
