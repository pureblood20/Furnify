/* eslint-disable no-constant-condition */
import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "..";
import { OrdersList, OrdersPagination, SectionTitle } from "../Components";

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("You must be logged in to checkout");
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const res = await customFetch.get("/orders", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        params,
      });
      return { orders: res.data.data, meta: res.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";

      toast.error(errorMessage);
      if (error.response.status === 401 || 403) return redirect("/login");

      return null;
    }
  };
const Orders = () => {
  const { orders } = useLoaderData();

  if (orders.length < 1) {
    <SectionTitle title="Please make an order" />;
  }

  return (
    <>
      <SectionTitle title="Your orders" />
      <OrdersList />
      <OrdersPagination />
    </>
  );
};

export default Orders;
