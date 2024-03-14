import customFetch from "..";
import { FeaturedProducts, Hero } from "../Components";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch("/products?featured=true"),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  console.log(response);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
