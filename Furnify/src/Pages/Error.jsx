
import img from "../assets/not-found.svg"
import { useRouteError,Link } from 'react-router-dom'
const Error = () => {
  const error = useRouteError()
  console.log(error);
  if(error.status === 404){
    return (<div className="flex flex-col items-center">
      <img src={img} className="h-96" alt="" />
      <h2 className="m-4">Ohhh!!!</h2>
      <p className="m-4">We cant seem to find the page you are looking for</p>
      <Link to='/' className="m-4 underline">Back home</Link>
    </div>)
  }
  return <div>Some error occured</div>   
}

export default Error