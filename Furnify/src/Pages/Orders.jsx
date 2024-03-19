/* eslint-disable no-constant-condition */
import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "..";
import { OrdersList, OrdersPagination, SectionTitle } from "../Components";

const orderQuery = (queryParams, user) => {
  console.log(user);
  const { page } = queryParams;
  return {
    queryKey: ["orders", user.username, page ?? 1],
    queryFn: () =>
      customFetch.get("/orders", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        params: queryParams,
      }),
  };
};

export const loader =
  (store, queryClient) =>
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
      const res = await queryClient.ensureQueryData(orderQuery(params, user));
      return { orders: res.data.data, meta: res.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";

      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");

      return null;
    }
  };
const Orders = () => {
  const { orders } = useLoaderData();

  if (orders.length < 1) {
    return <SectionTitle title="Please make an order" />;
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
