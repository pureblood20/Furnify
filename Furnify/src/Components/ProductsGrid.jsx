/* eslint-disable react/prop-types */

import { Link, useLoaderData } from "react-router-dom"


const ProductsGrid = () => {
const {products} = useLoaderData()

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
    {
        products.map((oneProd)=>{
            const {price,image,title} =oneProd.attributes
            const id = oneProd.id
            return(
                <Link to= {`/products/${id}`} key={oneProd.id}>
                <div className="card w-full shadow-xl hover:shadow-2xl transition duration-300" >
          <figure ><img className=" h-64 md:h-48 w-full object-cover" src={image} alt="furnify" /></figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title capitalize tracking-wider">
              {title}
              
            </h2>
            <p>${price/100}</p>
            
          </div>
        </div>
        </Link>
            )
        })
    }
    </div>
   
    
  )
}

export default ProductsGrid