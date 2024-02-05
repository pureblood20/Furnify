/* eslint-disable react/prop-types */

import ProductsGrid from "./ProductsGrid"
import SectionTitle from "./SectionTitle"



const FeaturedProducts = () => {
  return (
    <>
    <div className="pt-6 pb-4">
<SectionTitle title="Featured Products"/>   
</div>

        
            <ProductsGrid />
        
        
    </>
  )
}

export default FeaturedProducts