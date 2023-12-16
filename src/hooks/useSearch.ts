import { useInfiniteQuery } from 'react-query';
import { getSearchedProducts } from '../api/ProductAPi';
import { useContext } from 'react';
import ProductContext from '../context/ProductContext';

export const useSearch = () => {
    const { searchQuery } = useContext(ProductContext);
    return useInfiniteQuery(['products', searchQuery], ({ pageParam }) => getSearchedProducts({ searchQuery, pageParam }), {
        cacheTime: 20 * 60 * 1000,
        keepPreviousData: true,
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.page < Math.ceil(lastPage.total / lastPage.page_size)) return lastPage.page + 1;
            return false
        },
    }
    );
};

