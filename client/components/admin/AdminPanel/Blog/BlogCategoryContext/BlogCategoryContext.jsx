import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';



const BlogCategoryContext = createContext();

const BlogCategoryProvider = ({ children }) => {




  const [categories, setCategories] = useState([]);

 


 const getCategories = async ()=>{
            const {data} = await axios.get('/blog-categories')
            if(data?.error){
                toast.error(data.error)
            }
            setCategories(data);
 }
 
 useEffect(() => {
    getCategories()
  }, []);

  return (
    <BlogCategoryContext.Provider value={[categories, setCategories, getCategories]}>
      {children}
    </BlogCategoryContext.Provider>
  );
};

export { BlogCategoryContext, BlogCategoryProvider };
