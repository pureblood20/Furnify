import {Form,Link} from "react-router-dom"
import {FormInput, SubmitBtn} from "../Components/"

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className='card w-96  p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput label="Username" defaultValue="" type="text" name="username" />
        <FormInput label="Email" defaultValue="test@test.com" type="email" name="email" />
        <FormInput label="Password" defaultValue="" type="password" name="password" />
        <div>
        <SubmitBtn label="Register"/>
        </div>
        
        <div className='text-center'>Already a member? <span><Link to="/login" className="className='ml-2 link link-hover link-primary capitalize'">Login</Link></span></div>
    </Form> 
    </section>   
  )
}

export default Register