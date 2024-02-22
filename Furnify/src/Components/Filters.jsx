import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckBox from "./FormCheckBox";

const Filters = () => {
  const { meta, filterSearch } = useLoaderData();
  const { search, company, category, shipping, sort, price } = filterSearch;

  const categories = meta.categories;
  const companies = meta.companies;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      <FormSelect
        options={categories}
        label="search category"
        name="category"
        size="select-sm"
        defaultValue={category}
      />

      <FormSelect
        options={companies}
        label="search company"
        name="company"
        size="select-sm"
        defaultValue={company}
      />

      <FormSelect
        options={["a-z", "z-a", "high", "low"]}
        label="sort by"
        name="sort"
        size="select-sm"
        defaultValue={sort}
      />
      <FormRange
        label="select price"
        name="price"
        size="range-sm"
        defaultValue={price}
      />
      <FormCheckBox
        label="Free shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />

      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm ">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};
export default Filters;
