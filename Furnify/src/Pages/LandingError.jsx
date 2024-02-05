import { useRouteError } from "react-router-dom"



const LandingError = () => {
    const error = useRouteError()
    console.log(error , "landing");
  return (
    <div>
        <h4>Some error popped......</h4>
        
    </div>
  )
}

export default LandingError