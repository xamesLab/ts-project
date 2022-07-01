// TODO: ref and move to services

import Binance, { CandleChartInterval_LT, CandleChartResult } from "binance-api-node";
import { conf } from "../../../config/chart-config";
import { IData } from "./interface";

export async function getData(currency: string, timeFrame: CandleChartInterval_LT, limit: number) {
    // API Binance
    const client = Binance();

    const initialState: IData = {
        colors: { low: conf.colors.low, high: conf.colors.high },
        settings: {
            coin: currency,
            tF: timeFrame,
            limit: limit,
        },
        columns: {
            times: [],
            low: [],
            high: [],
            open: [],
            close: [],
        },
    };

    // futures request
    const response: CandleChartResult[] = await client.futuresCandles({
        symbol: `${currency}USDT`,
        interval: timeFrame,
        limit: limit,
    });

    response.forEach((v, i, arr) => {
        if (i !== arr.length - 1) {
            initialState.columns.times.push(v.openTime);
            initialState.columns.low.push(+v.low);
            initialState.columns.high.push(+v.high);
            initialState.columns.open.push(+v.open);
            initialState.columns.close.push(+v.close);
        }
    });
    return initialState;
}
