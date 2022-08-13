import AdminLayout from '../../../layout/AdminLayout'
import dynamic from 'next/dynamic';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { AuthContext } from '../../../context/auth';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
const ReactQuill  = dynamic(import('react-quill'), {	
	ssr: false,
	loading: () => <p>Loading ...</p>,
	})

const Quill = dynamic(import('quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});


import toast from 'react-hot-toast';
import axios from 'axios';
import Select from 'react-select';



console.log("QUILL =>", Quill)

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
  const inputTitle = useRef(0);

  const saveData = () => {
    const data = { title: blogTitle, content };
    localStorage.setItem('blog', JSON.stringify(data));
    return data;
  };
  // <==============/ STATE /=======================>

  const categoriesOptions = loadedCategories.map(category =>{
    return {value: category._id, label:category.name}
    
  })
  //  [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' },
  // ];
  // <==============/ ReactQuill Configuration /=======================>
  const formats = [
    'header',
    'font',
    'size',
    'table',
    'bold',
    'italic',
    'underline',
    'background',
    'color',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'align',
    'code-block',
  ];

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

    [], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction

    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ['clean'],
  ];

  const modules = {
    toolbar: toolbarOptions,
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
      table: true,
      imageResize: {
        displaySize: true,
      },
    },
  };
  // <==============/ ReactQuill Configuration /=======================>

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
        mainImg: 'img binary',
      };
      console.log("POST DATA ====>> ",postData)
      const { data } = await axios.post(
        `/post/create/${auth.user._id}`,
        postData
      );
      console.log('DATA => ', await data);
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
    if(typeof Quill?.register === 'function') {
       Quill.register('modules/imageResize', ImageResize);
    } 
      
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
              <ReactQuill
                modules={modules}
                formats={formats}
                theme="snow"
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

          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label>Poza Reprezentativa</Form.Label>
            <Form.Control type="file" size="lg" onChange= {e =>{
              setImage(e.target.value)
              console.log(image)
            }
              }/>
          </Form.Group>
          <div className="d-flex justify-content-around">
            <Button
              variant="primary"
              className="btn btn-bg"
              onClick={handler.savePost}
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
        </Col>
      </Row>
    </AdminLayout>
  );
}
  
  export default NewPost