import { useState } from "react";
import ProductsGrid from "./ProductsGrid"

import { BsFillGridFill,BsList  } from "react-icons/bs";
import ProductList from "./ProductList";
import { useLoaderData } from "react-router-dom";




const ProductsContainer = () => {
  const {meta} =useLoaderData()
  const totalProducts = meta.pagination.total
    const [layout,setLayout] = useState("grid")
    const setActiveStyles = (pattern) =>{
      return `text-xl btn btn-circle btn-sm${
        pattern === layout
          ? 'btn-primary text-primary-content'
          : 'btn-ghost text-based-content'
      }`
    }
  return (
    <>
    <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
        <h4 className='font-medium text-md'>
          {totalProducts} product{totalProducts > 1 && 's'}
        </h4>
        <div className='flex gap-x-2'>
          <button
            type='button'
            onClick={() => setLayout('grid')}
            className={setActiveStyles('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            type='button'
            onClick={() => setLayout('list')}
            className={setActiveStyles('list')}
          >
            <BsList />
          </button>
        </div>
      </div>
    
      {
        totalProducts === 0 ? "Sorry! No products matched your search." :
        layout === "grid" ? <ProductsGrid/> : <ProductList/>
      }
              
    </>
  )
}

export default ProductsContainer