import dynamic from 'next/dynamic';
import React, { useState, useEffect, useRef, useContext } from 'react';
const ReactQuill = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});




const ConfiguredQuill = (props) => {

  console.log("QUILL", ReactQuill)
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  const toolbarOptions = [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
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