import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
// Context API
import AuthContext from "../../../Context/auth/authContext";

const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  max-width: 40rem;
  margin-right: 8rem;
  display: flex;
  flex-direction: column;
`;
const SignInTitle = styled.h1`
  font-size: 3rem;
  color: black;
`;
const GroupContainer = styled.div`
  margin: 1.2rem 0;
`;

const Input = styled.input`
  width: 100%;
  font-size: 2rem;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.7);
  outline: none;
  padding: 0.5rem;
`;
const Form = styled.form``;
const Label = styled.label`
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
`;
const LogInButton = styled.button`
  width: 70%;
  font-size: 2rem;
  border-radius: 5px;
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: black;
  font-weight: 600;
  background: rgba(26, 38, 57, 1);
  outline: none;
  cursor: pointer;
`;

const SignInForm = (props) => {
  const authContext = useContext(AuthContext);

  const { login, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
  }, [isAuthenticated]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <FormContainer>
      <SignInTitle>Sign In</SignInTitle>
      <Form onSubmit={onSubmit}>
        <GroupContainer>
          <Label htmlFor="email">Email Adress</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </GroupContainer>
        <GroupContainer>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </GroupContainer>
        <LogInButton type="submit">Login</LogInButton>
      </Form>
    </FormContainer>
  );
};

export default SignInForm;
