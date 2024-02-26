import { Link, useLoaderData } from "react-router-dom";
import { customFetch, generateAmountOptions } from "../index";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Features/Cart/cartSlice";

export const loader = async (data) => {
  console.log(data);
  const id = data.params.id;
  const res = await customFetch.get(`/products/${id}`);
  const singleProduct = res.data.data;
  return singleProduct;
};

const SingleProduct = () => {
  const singleProduct = useLoaderData();
  const { image, title, price, description, colors, company } =
    singleProduct.attributes;
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  const cartProducts = {
    cartID: singleProduct.id + selectedColor,
    productID: singleProduct.id,
    image,
    title,
    price,
    company,
    selectedColor,
    amount,
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product: cartProducts }));
  };
  return (
    <>
      {/* breadcrumbs */}
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* image */}
        <img
          src={image}
          alt="title"
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">${price / 100}</p>
          <p className="mt-6 leading-8">{description}</p>

          {/* colors  */}
          <p className="mt-6 ">Colors</p>
          {colors.map((color) => (
            <button
              className={`badge h-6 w-6 mr-2 ${
                color === selectedColor && "border-2 border-secondary"
              }`}
              style={{ backgroundColor: color }}
              key={color}
              onClick={() => setSelectedColor(color)}
            ></button>
          ))}
          {/* amount */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(10)}
            </select>
          </div>
          {/* cart button */}
          <div className="mt-10 ">
            <button
              className="btn btn-secondary btn-md"
              onClick={() => addToCart()}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
