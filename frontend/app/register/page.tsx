"use client";
import { useDispatch, useSelector } from "react-redux";
// import { registerUser } from "@/store/slices/authSlice";
import { RootState, AppDispatch } from "@/store";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Card } from "react-bootstrap";

const RegisterPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [formDataResponse, setFormDataResponse]: any = useState("");

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("in handle submits");

  //   try {
  //     // const response = await dispatch(
  //     //   registerUser({ email, password, name })
  //     // )
  //   //   setFormDataResponse(response);
  //   //   console.log(response);
  //   // } catch (err) {
  //   //   console.error("Registration failed:", err);
  //   // }
  //   // if (registerUser.fulfilled.match(response)) {

  //   // }
  // };

  const handleSubmit = () => {};
  return (
    <>
      {formDataResponse ? (
        <>
          <div>success</div>
        </>
      ) : (
        <Container
          fluid
          className="border border-primary p-4 vh-100 d-flex justify-content-center align-items-center"
        >
          <Card className="shadow rounded" style={{ width: "50%" }}>
            <Card.Body>
              <Form onSubmit={handleSubmit} method="POST">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group> */}

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      )}
    </>
  );
};

export default RegisterPage;
