import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Card } from "react-bootstrap";

function LoginPage() {
  return (
    <>
      <Container
        fluid
        className="border border-primary p-4 vh-100 d-flex justify-content-center align-items-center"
      >
        <Card className="shadow rounded" style={{ width: "50%" }}>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ color: "black" }}>
                  Email address
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default LoginPage;
