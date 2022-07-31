
import { useContext } from 'react';
import { BlogCategoryContext } from './BlogCategoryContext/BlogCategoryContext';
import BlogCategoryListElement from './BlogCategoryListElement';




const BlogCategoryList = () => {
  const [categories] = useContext(BlogCategoryContext);


 





  


  
  if (!categories) return <div>Loading...</div>;
  return (
    <>
      {categories?.map((cat) => {
        return (
          <BlogCategoryListElement key={cat._id} {...cat}  />
        );
      })}
    </>
  );
};

export default BlogCategoryList;
