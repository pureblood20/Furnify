
import { FeaturedProducts, Hero } from "../Components"
import customFetch from "../index"


export const loader = async() =>{
  const {data} = await customFetch.get('/products?featured=true')
  const products = data.data
  // console.log(featuredProduct[0].attributes.title);
  return products
}

const Landing = () => {

  return (
  <>
    <Hero/>
<FeaturedProducts />
</>
  )
}

export default Landing