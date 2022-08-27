import dynamic from 'next/dynamic';
import React, { useState, useEffect, useRef, useContext } from 'react';
const ReactQuill = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});



const ConfiguredQuill = (props) => {
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
    ['blockquote', 'code-block', 'image',],

    [], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    

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

  return (
    <>
      <ReactQuill
        modules={modules}
        formats={formats}
        theme="snow"
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
};

export default ConfiguredQuill