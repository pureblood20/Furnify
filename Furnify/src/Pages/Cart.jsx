import { useSelector } from "react-redux";
import { CartItemList, CartTotals, SectionTitle } from "../Components";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = null;
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  if (numItemsInCart === 0) {
    <SectionTitle title="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle title="Shopping Cart" />
      <div className="mt-8 grid gap-8  lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              Proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              Please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
