
import AdminLayout from '../../../layout/AdminLayout';

import {Col, Row} from 'react-bootstrap'
import {
  BlogCategoryContext,
  BlogCategoryProvider,
  BlogCategoryList,
  CreateBlogCategoryForm,
} from '../../../components/admin/AdminPanel';



function BlogCategoryPage (){
  //state

  return (
    <AdminLayout>
      <BlogCategoryProvider>
        <h1>Categorii Blog</h1>
        <Row>
          <Col>
            Lista Categorii
            <BlogCategoryList />
          </Col>
          <Col>
            Creaza Categorie
            <CreateBlogCategoryForm />
          </Col>
        </Row>
      </BlogCategoryProvider>
    </AdminLayout>
  );
};

export default BlogCategoryPage;
