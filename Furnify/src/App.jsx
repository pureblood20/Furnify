/* eslint-disable no-unused-vars */
import {About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct} from "./Pages/index"
  import {createBrowserRouter, RouterProvider} from "react-router-dom"


function App() {
  
  const router = createBrowserRouter([
    {
      path : "/",
      element : <HomeLayout/>,
      errorElement : <Error/>,
      children : [
        {
          index : true,
          element : <Landing/>
        },
        {
          path : "about",
          element : <About/>
        },
        {
          path : "cart",
          element : <Cart/>
        },
        {
          path : "checkout",
          element : <Checkout/>
        },
        {
          path : "Orders",
          element : <Orders/>
        },
        {
          path : "products",
          element : <Products/>
        },
        {
          path : "products:id",
          element : <SingleProduct/>
        },
      ] 
    },
    {
      path : "/login",
      element : <Login/>,
      errorElement : <Error/>,
    },
    {
      path : "/register",
      element : <Register/>,
      errorElement : <Error/>,
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App