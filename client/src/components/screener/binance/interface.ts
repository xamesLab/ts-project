import { CandleChartInterval_LT } from "binance-api-node";

export interface ICandleData {
    [key: string]: number[];
    times: number[];
    low: number[];
    high: number[];
    open: number[];
    close: number[];
}

export type ChartColors = { low: string; high: string };

export interface IData {
    colors: ChartColors;
    settings: { coin: string; tF: CandleChartInterval_LT; limit: number };
    columns: ICandleData;
}

export type ChartSize = { width: number; height: number };

export type CoordinateList = number[][];

export type CanvasType = CanvasRenderingContext2D | null;
