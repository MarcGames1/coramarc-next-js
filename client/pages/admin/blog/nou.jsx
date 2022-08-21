import AdminLayout from '../../../layout/AdminLayout'
import dynamic from 'next/dynamic';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { AuthContext } from '../../../context/auth';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import Router from 'next/router';


import toast from 'react-hot-toast';
import axios from 'axios';
import Select from 'react-select';
import { config } from 'process';
import ConfiguredQuill from '../../../quill/ConfiguredQuill';




function NewPost () {
const ResetBlogData = {
  title: '',
  content: '',
  image:{},
  categories: [],
};

  // <==============/ Check Local Storage /=======================>
const LocalStorageBlogData = () =>{
  if(typeof(window)!=='undefined'){
    if(!localStorage.getItem('blogData')){
      console.log(
        'LOCAL STORAGE BLOG DATA ===>>> ',
        JSON.parse(localStorage.getItem('blogData'))
      );
      return ResetBlogData;
    } else{
      
       console.log(
         'LOCAL STORAGE BLOG DATA ===>>> ',
         JSON.parse(localStorage.getItem('blogData'))
       );
       return JSON.parse(localStorage.getItem('blogData'));
    }
  }
}

 const saveData = (blogData) => {
   localStorage.setItem('blogData', JSON.stringify(blogData));
 };


  // <==============/ Check Local Storage /=======================>
  // <==============/ STATE /=======================>
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState(LocalStorageBlogData());
  const [loadedCategories, setLoadedCategories] = useState([]);
  const [auth] = useContext(AuthContext);
  const [image, setImage] = useState(null)
  const formRef = useRef();
  var bodyFormData = undefined;
 
  // <==============/ STATE /=======================>

  const categoriesOptions = loadedCategories.map(category =>{
    return {value: category._id, label:category.name}
    
  })


  //<==============/ Handler Object /=======================>

  const handler = {
    titleChange: (e) => {
      e.preventDefault();
      setBlogData( {...blogData, title: e.target.value});
      saveData({blogData});
      console.log("BLOG DATA STATE =>",blogData);
    },
    contentChange: (v) => {
      setBlogData({...blogData, content: v  });
      saveData(blogData);
      console.log(blogData);
    },
    imageChange:(e) =>{
      console.log(e.target.files[0])
      bodyFormData = new FormData();
      bodyFormData.append('postImage', e.target.files[0]);
    },
    categoriesChange: (selectedOptions) => {
      const catList = selectedOptions.map((option) => {
        return option.value;
      });
      setBlogData({...blogData, categories: catList });
      saveData(blogData);
      console.log(blogData);
    },

    savePost: async () => {
if(typeof(bodyFormData)=== 'undefined'){
  bodyFormData =new FormData();
}
      bodyFormData.append("title", blogData.title)
      bodyFormData.append("content", blogData.content)
      bodyFormData.append("categories", blogData.categories)
      
      // bodyFormData.append({blogData });
      const postLoading = toast.loading('Saving post...');

      const { data } =  await axios.post(
        `/post/create/${auth.user._id}`,
        bodyFormData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      if (data?.error) {
        toast.dismiss();
        toast.error('Error Saving Post');
        console.log(data.error);
      } else {
        toast.dismiss();
        toast.success('Post Saved');
        console.log(data)
        
        bodyFormData = new FormData();
        
        setBlogData({});
        localStorage.removeItem('blogData');
        formRef.current.reset();
        Router.reload()
      }
    },

    submit:(e) =>{
      e.preventDefault();
     console.log(e?.file)
    }
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
  }, [blogData?.content]);
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
                  value={blogData.title}
                  onChange={(e) => {
                    handler.titleChange(e);
                  }}
                  type="text"
                  placeholder="Titlu Articol"
                />
              </Form>
              <ConfiguredQuill
                value={blogData.content ?? ''}
                onChange={handler.contentChange}
              />

              <div
                className="ql-content"
                dangerouslySetInnerHTML={{ __html: blogData.content }}
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
            ref={formRef}
            // action={`${process.env.NEXT_PUBLIC_API}/post/create/${auth?.user?._id}`}
            method="post"
            enctype="multipart/form-data"
          >
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>Poza Reprezentativa</Form.Label>
              <Form.Control
                onChange={(e) => {
                  handler.imageChange(e);
                }}
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
                onClick={(e) => {
                  handler.savePost();
                }}
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