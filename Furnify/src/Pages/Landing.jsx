
import { FeaturedProducts, Hero } from "../Components"
import customFetch from "../Utils"


export const loader = async() =>{
  const {data} = await customFetch.get('/products?featured=true')
  const featuredProduct = data.data
  // console.log(featuredProduct[0].attributes.title);
  return featuredProduct
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