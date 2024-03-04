import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../Components/";
import customFetch from "..";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("Account created successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "Please double check your credentials";
    toast.error(errorMessage);
    console.log(error);
    return null;
  }
};

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96  p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          label="Username"
          defaultValue=""
          type="text"
          name="username"
        />
        <FormInput label="Email" type="email" name="email" defaultValue="" />
        <FormInput
          label="Password"
          defaultValue=""
          type="password"
          name="password"
        />
        <div>
          <SubmitBtn label="Register" />
        </div>

        <div className="text-center">
          Already a member?{" "}
          <span>
            <Link
              to="/login"
              className="className='ml-2 link link-hover link-primary capitalize'"
            >
              Login
            </Link>
          </span>
        </div>
      </Form>
    </section>
  );
};

export default Register;
