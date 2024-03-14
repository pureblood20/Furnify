import {
  Filters,
  PaginationContainer,
  ProductsContainer,
} from "../Components/";
import customFetch from "../index";

export const loader =
  ({ queryClient }) =>
  async ({ request }) => {
    const filterSearch = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await customFetch.get("/products", {
      params: filterSearch,
    });

    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta, filterSearch };
  };

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
