import axios from "axios";

export const customFetch = axios.create({
  baseURL: "https://strapi-store-server.onrender.com/api",
});

export default customFetch;

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};