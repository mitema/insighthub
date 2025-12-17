"use client";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/frontend/store/slices/authSlice";
import { RootState, AppDispatch } from "@/frontend/store";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await dispatch(registerUser({ email, password, name }));
    // if (registerUser.fulfilled.match(response)) {
    setFormDataResponse(response);
    // }
  };

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
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ color: "black" }}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
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
