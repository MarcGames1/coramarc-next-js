import Form from 'react-bootstrap/Form'

const Test = () =>{

    return (
      <>
        <Form
          action={`${process.env.NEXT_PUBLIC_API}/uploadPostImage`}
          method="post"
          enctype="multipart/form-data"
          headers={'Content-Type: multipart/form-data'}
        >
          <Form.Group name="postImage" controlId="formFileLg" className="mb-3">
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
          <button type="submit">Upload</button>
        </Form>
      </>
    );
}

export default Test