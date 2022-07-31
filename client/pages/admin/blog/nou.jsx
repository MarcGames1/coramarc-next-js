import AdminLayout from '../../../layout/AdminLayout'
import dynamic from 'next/dynamic';
import React, { useState, useEffect, useRef } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
const ReactQuill = dynamic(import('react-quill'), {	
	ssr: false,
	loading: () => <p>Loading ...</p>,
	})

  import axios from 'axios';
import Select from 'react-select';




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
  const [categories, setCategories] = useState([]);
  const [loadedCategories, setLoadedCategories] = useState([]);

  const inputTitle = useRef(0);

  const saveData = () => {
    const data = { title: blogTitle, content };
    localStorage.setItem('blog', JSON.stringify(data));
    return data;
  };
  // <==============/ STATE /=======================>

  const categoriesOptions = loadedCategories.map(category =>{
    return {value: category.name, label:category.name}
    
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
      matchVisual: true,
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
          <Button
            variant="primary"
            className="btn btn-bg"
            onClick={() => {
              console.log('clicked');
            }}
          >
            Save Blog Post
          </Button>

          <div
            className="ql-content"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </>
      )}
      <section>
        <h3>Selecteaza Categoria</h3>
        
        <Select
          isMulti
          name="categories"
          options={categoriesOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <br /> <br />
        <br /> <br />
        <br /> <br />
      </section>
    </AdminLayout>
  );
}
  
  export default NewPost