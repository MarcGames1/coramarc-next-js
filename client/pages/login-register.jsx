import { Signin, Signup } from "../components/SignIn-SignUp"
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap"
import MainLayout from "../Layout/MainLayout"
import Breadcrumbs from "nextjs-breadcrumbs";
const Login_register = () =>{


    return (
      <MainLayout>
        <div className="login-register-wrapper ">
          <div className="bg-primary w-100 h-100 section-padding ">
        
            <h1 className="text-center">Text</h1>
          </div>
          <Container>
            <div class="member-area-from-wrap">
              <Row
                xxl={{ cols: 2 }}
                xl={12}
                className="d-grif gap-3"
                as={CardGroup}
              >
                <Col xxl={6} xl={12} className="login-reg-form-wrap" as={Card}>
                  <Signin />
                </Col>
                <Col
                  xl={{ cols: 1 }}
                  className="login-reg-form-wrap sign-up-form"
                  as={Card}
                >
                  <Signup />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </MainLayout>
    );
}

export default Login_register