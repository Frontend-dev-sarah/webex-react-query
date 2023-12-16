import { createContext, useState } from "react";

type ProductContextType = {
    searchQuery: string;
    onChangeSearch: (searchQuery: string) => void;
}

type ProductProviderType = {
    children: React.ReactNode
}

const ProductContext = createContext<ProductContextType>({} as ProductContextType)

export const ProductProvider = ({ children }: ProductProviderType) => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = (searchQuery: string) => setSearchQuery(searchQuery);

    return (
        <ProductContext.Provider value={{
            searchQuery,
            onChangeSearch,
        }}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContext;