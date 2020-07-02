// Dependencies
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// Context API
import AuthContext from "../../../Context/auth/authContext";
// Styled-Components
const FormContainer = styled.div`
  min-width: 40rem;
  display: flex;
  flex-direction: column;
  padding: 8rem 2.5rem 12rem 2.5rem;
  margin: 3rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
`;
const SignInTitle = styled.h1`
  margin-bottom: 5rem;
  font-size: 2.5rem;
  font-family: "Poppins", sans-serif;
  color: rgba(0, 0, 0, 0.9);
`;
const GroupContainer = styled.div`
  margin: 1.4rem 0;
`;
const Input = styled.input`
  width: 100%;
  font-size: 2rem;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
  padding: 0.5rem;
  margin-top: 0.3rem;
  background: rgba(255, 255, 255, 0);
`;
const Form = styled.form``;
const Label = styled.label`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.4rem;
  font-weight: 700;
`;
const LogInButton = styled.button`
  width: 70%;
  font-size: 2rem;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.92);
  font-weight: 600;
  background: rgba(26, 38, 57, 1);
  outline: none;
  cursor: pointer;
  padding: 0.5rem;
  margin: 1rem 0 3rem 0;
`;
const SignUp = styled.p`
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
`;
const linkStyle = {
  textDecoration: "none",
  color: "rgba(255, 0, 0, 0.8)",
  marginLeft: "0.4rem",
};

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
      <svg width="30px" height="30px" viewBox="0 0 64 64">
        <path
          d="M57,31H31a3,3,0,0,0-3,3V60a3,3,0,0,0,3,3H57a3,3,0,0,0,3-3V34A3,3,0,0,0,57,31ZM51.8,41.6l-9,12a1,1,0,0,1-1.507.107l-6-6a1,1,0,0,1,1.414-1.414l5.185,5.185L50.2,40.4a1,1,0,1,1,1.6,1.2Z"
          fill="#c4a2fc"
        />
        <path
          d="M39,51a3,3,0,0,0,3-3V14a4.1,4.1,0,0,0-.1-.447l-6-12A1.047,1.047,0,0,0,35,1H7A3,3,0,0,0,4,4V48a3,3,0,0,0,3,3ZM33.684,6.868,35,4.236l3.421,6.843-4.4-2.932A1,1,0,0,1,33.684,6.868ZM6,48V4A1,1,0,0,1,7,3H33.382L31.9,5.974a3,3,0,0,0,1.02,3.838L40,14.535V48a1,1,0,0,1-1,1H7A1,1,0,0,1,6,48Zm7-37a1,1,0,0,1,1-1h9a1,1,0,0,1,0,2H14A1,1,0,0,1,13,11Zm0,4a1,1,0,0,1,1-1h9a1,1,0,0,1,0,2H14A1,1,0,0,1,13,15Zm0,8a1,1,0,0,1,1-1H32a1,1,0,0,1,0,2H14A1,1,0,0,1,13,23Zm0,6a1,1,0,0,1,1-1H32a1,1,0,0,1,0,2H14A1,1,0,0,1,13,29Zm0,6a1,1,0,0,1,1-1H32a1,1,0,0,1,0,2H14A1,1,0,0,1,13,35Zm0,6a1,1,0,0,1,1-1H32a1,1,0,0,1,0,2H14A1,1,0,0,1,13,41Z"
          fill="#151a6a"
        />
      </svg>
      <SignInTitle>Log-in to your account</SignInTitle>
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
      <SignUp>
        Don't have an account ?
        <Link style={linkStyle} to="/register">
          Sign up
        </Link>
      </SignUp>
    </FormContainer>
  );
};

export default SignInForm;
