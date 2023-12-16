import axios from "axios";

const BASE_URL = process.env.API_URL;

type queryType = {
  searchQuery?: string;
  pageParam?: number;
};

export
  const getSearchedProducts = async ({ searchQuery, pageParam = 1 }: queryType) => {
    if (!searchQuery) return;
    try {
      const res = await axios(`${BASE_URL}/products/elasticsearch?search=${searchQuery}&tag=WEB&facets=false&page=${pageParam}&nb_items_per_page=10`);
      return res.data;
    } catch (e: any) {
      return { error: e.message };
    }
  };

export const getProductPrice = async (productId: number) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/products/${productId}/prices`
    );
    return res.data;
  } catch (e: any) {
    return { error: { message: e.message } };
  }
};

export const getProductStock = async (productId: number) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/products/${productId}/stocks`
    );
    return res.data;
  } catch (e: any) {
    return { error: { message: e.message } };
  }
};

export default { getSearchedProducts, getProductPrice, getProductStock };
