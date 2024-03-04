import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../Components/";
import customFetch from "..";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginUser } from "../Features/User/userSlice";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();

    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));

      toast.success("Logged in successfully");

      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Please double check your credentials";
      toast.error(errorMessage);
      console.log(error);
      return null;
    }
  };

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96  p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          label="Email"
          defaultValue="shivivj24@gmail.com"
          type="email"
          name="identifier"
        />
        <FormInput
          label="Password"
          defaultValue=""
          type="password"
          name="password"
        />
        <div>
          <SubmitBtn label="Login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          {" "}
          Guest User
        </button>
        <div className="text-center">
          Not a member yet ?{" "}
          <span>
            <Link
              to="/register"
              className="className='ml-2 link link-hover link-primary capitalize'"
            >
              Register
            </Link>
          </span>
        </div>
      </Form>
    </section>
  );
};

export default Login;
