import dynamic from 'next/dynamic';
const FontAwesomeIcon = dynamic(
  async () => (await import('@fortawesome/react-fontawesome')).FontAwesomeIcon
);
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/auth';
import { Form, InputGroup } from 'react-bootstrap';
import LoadingBtn from "../../../UI/LoadingBtn";
import { CategoryContext } from './categoryContext/categoryContext';
import ConfiguredQuill from '../../../../quill/ConfiguredQuill'


const CreateCategoryForm = () => {

  const [auth, setAuth] = useContext(AuthContext);
  const [categories, setCategories, getCategories] = useContext(CategoryContext);

  //state
  const [loading, setLoading] = useState(false);
  const [inputCategory, setInputCategory] = useState({initialState});

  const initialState = { name: '', description: '' };

const catName = useRef();
// const quillRef = useRef();
const formRef = useRef();
//BodyFrom Data to append formdata later
var bodyFormData = undefined;
    // FUNCTIONS
  const handleChange = {
    name: (e) => {
      console.log(inputCategory);
      setInputCategory({...inputCategory, name: e.target.value });
    },
    description:(v)=>{
      setInputCategory({...inputCategory, description: v });
    },
    imageChange:(e)=>{
      if (typeof bodyFormData === 'undefined') {
        bodyFormData = new FormData();
      }
       bodyFormData.append('categoryImage', e.target.files[0]);
       
    },
    submit_form: (e) => {
      e.preventDefault();
      if (typeof bodyFormData === 'undefined') {
        bodyFormData = new FormData();
      }
       bodyFormData.append('name', inputCategory.name);
       bodyFormData.append('content', inputCategory.description);
      onFinish();
       catName.current.value = '';
      //  quillRef.current.value = '';
       bodyFormData = undefined;
    },
  };

  const onFinish = async () => {
    
    try {
      setLoading(true);
      console.log('USER => ', auth.user._id);

      const { data } = await axios.post(
        `/category/create/${auth.user._id}`,
          bodyFormData,
        
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      console.log('DATA => ',  data);
      if (data?.error) {
        setLoading(false);
        toast.error(data.error);
        console.log(data);
      } else {
        toast.success('Categorie Creata cu Succes');
        setLoading(false);
        console.log(data);
        
        getCategories()
      }
    } catch (err) {
      toast.error('error => ', err);
      console.log(err);
      setLoading(false);
      //   console.log(data);
    }
  };

    //FUNCTIONS END
  return (
    <Form
      ref={formRef}
      enctype="multipart/form-data"
      onSubmit={handleChange.submit_form}
    >
      <Form.Group className="mb-3" controlId="Titlu Categorie">
        <Form.Label>Titlu Categorie</Form.Label>
        <InputGroup className="single-input-item">
          <Form.Control
            ref={catName}
            onChange={handleChange.name}
            type="text"
            placeholder="Nume Categorie"
          />
          <InputGroup.Text>
            <FontAwesomeIcon icon={faCirclePlus} />
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <span className=" h2">Descriere Categorie</span>
      <ConfiguredQuill
        value={inputCategory.description ?? ''}
        // ref={quillRef}
        onChange={handleChange.description}
      />
      
      <Form.Label className=" h2">Poza Reprezentativa</Form.Label>
      <Form.Control
        enctype="multipart/form-data"
        type="file"
        name="productCatImage"
        onChange={(e) => {
          e.preventDefault();
          handleChange.imageChange(e);
        }}
        accept="image/*"
        multiple={false}
      />

      <LoadingBtn
        loading={loading}
        variant={'primary'}
        text={'Creaza Categorie'}
      />
    </Form>
  );
};

export default CreateCategoryForm;
