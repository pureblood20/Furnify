
import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';


const Filters = () => {
  const {meta} = useLoaderData()
  console.log(meta);
  const categories = meta.categories
  const companies = meta.companies
  
  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* SEARCH */}
      <FormInput
        type='search'
        label='search product'
        name='search'
        size='input-sm'
      />
<FormSelect 
        options = {categories}
        label='search category'
        name='category'
        size='select-sm' />

        <FormSelect 
        options = {companies}
        label='search company'
        name='company'
        size='select-sm' />

<FormSelect 
        options = {['a-z','z-a' , 'high','low']}
        label='sort by'
        name='sort'
        size='select-sm' />
      {/* BUTTONS */}
      <button type='submit' className='btn btn-primary btn-sm '>
        search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm'>
        reset
      </Link>
    </Form>
  );
};
export default Filters;