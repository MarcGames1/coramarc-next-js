import AdminLayout from '../../../layout/AdminLayout'
import dynamic from 'next/dynamic';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { AuthContext } from '../../../context/auth';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';



import toast from 'react-hot-toast';
import axios from 'axios';
import Select from 'react-select';
import { config } from 'process';
import ConfiguredQuill from '../../../quill/ConfiguredQuill';




function NewPost () {


  // <==============/ Check Local Storage /=======================>
  const storedBlogContent = () => {
    if (process.browser) {
      if (localStorage.getItem('blogContent')) {
        return JSON.parse(localStorage.getItem('blogContent'));
      }
    }
  };

  const storedBlogTitle = () => {
    if (process.browser) {
      if (localStorage.getItem('blogTitle')) {
        return JSON.parse(localStorage.getItem('blogTitle'));
      }
    }
  };
  // <==============/ Check Local Storage /=======================>
  // <==============/ STATE /=======================>
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(storedBlogContent());
  const [blogTitle, setBlogTitle] = useState(storedBlogTitle());
  const [categories, setCategories] = useState();
  const [loadedCategories, setLoadedCategories] = useState([]);
  const [auth, setAuth] = useContext(AuthContext);
  const [image, setImage] = useState()
  

  const saveData = () => {
    const data = { title: blogTitle, content };
    localStorage.setItem('blog', JSON.stringify(data));
    return data;
  };
  // <==============/ STATE /=======================>

  const categoriesOptions = loadedCategories.map(category =>{
    return {value: category._id, label:category.name}
    
  })


  //<==============/ Handler Object /=======================>

  const handler = {
    titleChange: (e) => {
      setBlogTitle(e.target.value);
      localStorage.setItem('blogTitle', JSON.stringify(blogTitle));
      console.log(blogTitle);
    },
    contentChange: (v) => {
      setContent(v);
      localStorage.setItem('blogContent', JSON.stringify(content));
      console.log(v);
    },
    savePost: async () => {
      console.log('post Saved');
      const postLoading = toast.loading('Saving post...');
      const postData = {
        title: blogTitle,
        content: content,
        categories: categories,
        Image: image,
      };
      console.log("POST DATA ====>> ",postData)
      const { data } = await axios.post(
        `/post/create/${auth.user._id}`,
        postData,{
  headers: {
    "Content-Type": "multipart/form-data",
  },
         
});
      console.log('DATA => ', data);
      if (data?.error) {
        toast.dismiss();
        toast.error('Error Saving Post');
        console.log(data.error);
      } else {
        toast.dismiss();
        toast.success('Post Saved');
      }
    },
    categoriesChange: selectedOptions =>{
   const  catList = selectedOptions.map((option)=>{return option.value})
      setCategories(catList);
      console.log("CATEGORIES ===> ",categories)
    },

   
  };



  //<==============/ Handler Object /=======================>
  //<==============/ Loading Categories from Backend /=======================>
  useEffect(() => {
    loadCategories()
    
  },[])

  const loadCategories = async () =>{
    try{
    const { data } = await axios.get('/blog-categories');
    setLoadedCategories(data)
    console.log(loadedCategories)
    }
    catch(err){
      console.log(err);
    }

  }
  //<==============/ Loading Categories from Backend /=======================>
  //<==============/ Loading Before Editor shows up /=======================>

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLoading(false);
  
      
    }
  }, [content]);
  //<==============/ Loading Before Editor shows up /=======================>

  return (
    <AdminLayout>
      <h1>Create New Post</h1>
      <Row>
        <Col lg={6}>
          {loading ? (
            'Loading... '
          ) : (
            <>
              <br />
              <Form>
                <Form.Label htmlFor="Titlu" className="text-center">
                  Titlu Articol
                </Form.Label>
                <Form.Control
                  name="Titlu"
                  defaultValue={blogTitle}
                  onChange={handler.titleChange}
                  type="text"
                  placeholder="Titlu Articol"
                />
              </Form>
              <ConfiguredQuill
                value={content}
                onChange={handler.contentChange}
              />

              <div
                className="ql-content"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </>
          )}
        </Col>
        <Col>
          <h3>Selecteaza Categoria</h3>
          <Select
            isMulti
            name="categories"
            options={categoriesOptions}
            onChange={handler.categoriesChange}
            className="basic-multi-select"
            classNamePrefix="select"
          />
          <Form
            action={`${process.env.NEXT_PUBLIC_API}/post/create/${auth.user._id}`}
            method="post"
            enctype="multipart/form-data"
          >
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>Poza Reprezentativa</Form.Label>
              <Form.Control
                enctype="multipart/form-data"
                type="file"
                name="postImage"
                size="lg"
                accept="image/*"
                multiple={false}
              />
            </Form.Group>
            
          <div className="d-flex justify-content-around">
            <Button
              variant="primary"
              className="btn btn-bg"
              onClick={e=>{e.preventDefault();handler.savePost();}}
              type="submit"
              >
              Save Blog Post
            </Button>
            <Button
              variant="secondary"
              className="btn btn-bg2"
              onClick={handler.preview}
              >
              Previzualizeaza
            </Button>
          </div>
              </Form>
        </Col>
      </Row>
    </AdminLayout>
  );
}
  
  export default NewPost