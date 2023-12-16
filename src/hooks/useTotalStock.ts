export const useTotalStock = (stockList: any) =>
    stockList?.reduce((accumulator: number, currentValue: any) => {
        return accumulator + currentValue.stock;
    }, 0);