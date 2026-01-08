"use client";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Card } from "react-bootstrap";
import { useState } from "react";
import { loginUser } from "@/store/slices/authSlice";
import { RootState, AppDispatch } from "@/store";
import { useDispatch, useSelector } from "react-redux";

function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [formDataResponse, setFormDataResponse]: any = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("in handle submits");

    try {
      const response = await dispatch(loginUser({ email, password }));
      setFormDataResponse(response);
      console.log(response);
    } catch (err) {
      console.error("login failed:", err);
    }
    // if (registerUser.fulfilled.match(response)) {

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
}
export default LoginPage;
