import { NavLink } from "react-router-dom";


const Navlinks = () => {
    const links = [
        { id: 1, url: '/', text: 'home' },
        { id: 2, url: 'about', text: 'about' },
        { id: 3, url: 'products', text: 'products' },
        { id: 4, url: 'cart', text: 'cart' },
        { id: 5, url: 'checkout', text: 'checkout' },
        { id: 6, url: 'orders', text: 'orders' },
      ];
  return (
    <div>
        {
            links.map((item)=>{
                return(
                   
      <li key={item.id} ><NavLink className="capitalize" to={item.url}>{item.text}</NavLink></li>
      
    
                )
            })
        }
    </div>
  )
}

export default Navlinks