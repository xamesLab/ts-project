export interface IAggTrades {
    symbol: string;
    fromId?: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
}

export interface ILiquidationOrders {
    symbol?: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
}
