import dynamic from 'next/dynamic';
const FontAwesomeIcon = dynamic(
  async () => (await import('@fortawesome/react-fontawesome')).FontAwesomeIcon
);
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/auth';
import { Form, InputGroup } from 'react-bootstrap';
import LoadingBtn from "../../../UI/LoadingBtn";


const CreateCategoryForm = () => {

  const [auth, setAuth] = useContext(AuthContext);

  //state
  const [loading, setLoading] = useState(false);
  const [inputCategory, setInputCategory] = useState('');




    // FUNCTIONS
  const handleChange = {
    name: (e) => {
      console.log(inputCategory);
      setInputCategory(e.target.value);
    },
    submit_form: (e) => {
      e.preventDefault();
      onFinish(inputCategory);
    },
  };

  const onFinish = async (values) => {
    console.log('VALUES', { name: values });
    try {
      setLoading(true);
      console.log('USER => ', auth.user._id);

      const { data } = await axios.post(`/category/create/${auth.user._id}`, {
        name: values,
      });
      console.log('DATA => ', await data);
      if (data?.error) {
        setLoading(false);
        toast.error(data.error);
        console.log(data);
      } else {
        toast.success('Categorie Creata cu Succes');
        setLoading(false);
        console.log(data);
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
    <Form onSubmit={handleChange.submit_form}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <InputGroup className="single-input-item">
          <Form.Control
            onChange={handleChange.name}
            type="text"
            placeholder="Nume Categorie"
          />
          <InputGroup.Text>
            <FontAwesomeIcon icon={faCirclePlus} />
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <LoadingBtn
        loading={loading}
        variant={'primary'}
        text={'Creaza Categorie'}
      />
    </Form>
  );
};

export default CreateCategoryForm;
