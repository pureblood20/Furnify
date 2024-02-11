
import {Filters,
  PaginationContainer,
  ProductsContainer} from "../Components/"
  import customFetch from "../index"

  export const loader =async () =>{
    const response = await customFetch.get("/products")
    const products = response.data.data
    const meta = response.data.meta
    return {products,meta}
  }

const Products = () => {
 

  return (
    
    <>
   <Filters/>
   <ProductsContainer/>
   <PaginationContainer/>
    </>
  )
} 

export default Products