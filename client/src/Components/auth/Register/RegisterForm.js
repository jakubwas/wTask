// Dependencies
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// Context API
import AuthContext from "../../../Context/auth/authContext";
// Styled-Components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 520px) {
    width: 100%;
  }
`;
const RegisterTitle = styled.h1`
  font-size: 3rem;
  color: rgba(255, 255, 255, 1);
  @media screen and (max-width: 520px) {
    font-size: 2.5rem;
    font-weight: 500;
  }
`;
const Form = styled.form``;
const GroupContainer = styled.div`
  margin: 1.4rem 0;
`;
const Input = styled.input`
  width: 100%;
  font-size: 2rem;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.5);
  border: 3px solid rgba(0, 0, 0, 0.2);
  outline: none;
  padding: 0.5rem;
  margin-top: 0.3rem;
`;
const Label = styled.label`
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.4rem;
  font-weight: 500;
`;
const RegisterButton = styled.button`
  width: 70%;
  font-size: 2rem;
  border-radius: 5px;
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
  background: rgba(26, 38, 57, 1);
  outline: none;
  cursor: pointer;
`;
const LoginContainer = styled.div`
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
  font-size: 1.3rem;
  margin-top: 2rem;
`;
const LoginButton = styled.button`
  margin-top: 0.5rem;
  width: 50%;
  font-size: 2rem;
  font-weight: 600;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 1);
  padding: 0.3rem;
  cursor: pointer;
  outline: none;
`;
// React Component
const RegisterForm = (props) => {
  const authContext = useContext(AuthContext);
  const { register, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
  }, [isAuthenticated]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    register({
      name,
      email,
      password,
    });
  };

  return (
    <FormContainer>
      <RegisterTitle>Create account</RegisterTitle>
      <Form onSubmit={onSubmit}>
        <GroupContainer>
          <Label htmlFor="email">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </GroupContainer>
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
            minLength="6"
          />
        </GroupContainer>
        <GroupContainer>
          <Label htmlFor="password2">Confirm Password</Label>
          <Input
            id="password2"
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
          />
        </GroupContainer>
        <RegisterButton>Sign up</RegisterButton>
      </Form>
      <LoginContainer>
        <span>
          Do you already have an account ?<br />
        </span>
        <Link to="/login">
          <LoginButton>Sign in</LoginButton>
        </Link>
      </LoginContainer>
    </FormContainer>
  );
};

export default RegisterForm;
