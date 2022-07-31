import AdminLayout from '../../../layout/AdminLayout'
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const ReactQuill = dynamic(import('react-quill'), {	
	ssr: false,
	loading: () => <p>Loading ...</p>,
	})




function NewPost () {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true)

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
      'code-block'
    ];


    const toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [ ], // custom button values
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
      toolbar:toolbarOptions,
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: true,
      },
    };


    useEffect(()=>{
        if (typeof window !== 'undefined') {
          setLoading(false);
          console.log(content)
        }

    }, [content])
    

    return (
      <AdminLayout>
        <h1>Create New Post</h1>

        {loading ? (
          'Loading... '
        ) : (
          <>
            <br />
            <div className="ql-content" dangerouslySetInnerHTML={{ __html: content }}></div>
              
                <ReactQuill
                  modules={modules}
                  formats={formats}
                  theme="snow"
                  value={content}
                  onChange={setContent}
                />
              
            
          </>
        )}
      </AdminLayout>
    );
}

export default NewPost