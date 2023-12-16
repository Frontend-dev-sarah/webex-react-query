import { useQuery } from 'react-query';
import { getProductPrice, getProductStock } from '../api/ProductAPi';

export const usePrice = (productId: number) => {
    return useQuery(['price', productId], () =>
        getProductPrice(productId), {
        keepPreviousData: true,
        cacheTime: 20 * 60 * 1000,
    }
    );
};

export const useStock = (productId: number) => {
    return useQuery(['stock', productId], () =>
        getProductStock(productId), {
        keepPreviousData: true,
        cacheTime: 20 * 60 * 1000,
    }
    );
};