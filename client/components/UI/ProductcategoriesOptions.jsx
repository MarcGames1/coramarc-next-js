import React, {useContext} from 'react'
import Select from 'react-select'
import { CategoryContext } from '../admin/AdminPanel/';


function ProductcategoriesOptions({onChange}) {
const [categories] = useContext(CategoryContext)

const categoriesOptions = categories.map((category) => {
  return { value: category._id, label: category.name };
});


  return (
    <>
      
      <Select
        isMulti
        name="categories"
        options={categoriesOptions}
        onChange={onChange}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </>
  );
}

export default ProductcategoriesOptions