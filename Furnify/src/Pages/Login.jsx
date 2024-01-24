import {Form,Link} from "react-router-dom"
import {FormInput, SubmitBtn} from "../Components/"

const Login = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className='card w-96  p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput label="Email" defaultValue="test@test.com" type="email" name="email" />
        <FormInput label="Password" defaultValue="" type="password" name="password" />
        <div>
        <SubmitBtn label="Login"/>
        </div>
        <button type="button" className="btn btn-secondary btn-block"> Guest User</button>
        <div className='text-center'>Not a member yet ? <span><Link to="/register" className="className='ml-2 link link-hover link-primary capitalize'">Register</Link></span></div>
    </Form> 
    </section>   
  )
}

export default Login