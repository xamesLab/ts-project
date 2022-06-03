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

    orderBook(params) {
        return this.client.futuresBook(params);
    }

    candles(params) {
        return this.client.futuresCandles(params);
    }
}

export default new FuturesService();
