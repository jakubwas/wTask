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
// rgba(0, 0, 0, 0.2)
const Input = styled.input`
  width: 100%;
  font-size: 2rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.7);
  border: ${(props) => props.borderColor};
  outline: none;
  padding: 0.5rem;
  margin-top: 0.3rem;
  ::placeholder {
    color: red;
    font-weight: 700;
  }
`;
const Label = styled.label`
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.4rem;
  font-weight: 500;
`;
const RegisterButton = styled.button`
  width: 70%;
  font-size: 2rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
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
  border: 0.1rem solid rgba(0, 0, 0, 0.5);
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

  // Password validation
  const [passwordPlaceholderMessage, setPasswordPlaceholderMessage] = useState(
    ""
  );
  const [passwordBorder, setPasswordBorder] = useState(
    "0.3rem solid rgba(0, 0, 0, 0.2)"
  );
  // Email validation
  const [emailPlaceholderMessage, setEmailPlaceholderMessage] = useState("");
  const [emaildBorder, setEmailBorder] = useState(
    "0.3rem solid rgba(0, 0, 0, 0.2)"
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setUser({ ...user, password: "", password2: "" });
      setPasswordPlaceholderMessage("Passwords must match");
      setPasswordBorder("0.1rem solid rgba(255, 0, 0, 1)");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <FormContainer>
      <RegisterTitle>Create account</RegisterTitle>
      <Form onSubmit={onSubmit}>
        <GroupContainer>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
            borderColor={"0.3rem solid rgba(0, 0, 0, 0.2)"}
          />
        </GroupContainer>
        <GroupContainer>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
            placeholder={emailPlaceholderMessage}
            borderColor={emaildBorder}
            onFocus={() => {
              setEmailPlaceholderMessage("");
              setEmailBorder("0.3rem solid rgba(0, 0, 0, 0.2)");
            }}
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
            placeholder={passwordPlaceholderMessage}
            borderColor={passwordBorder}
            onFocus={() => {
              setPasswordPlaceholderMessage("");
              setPasswordBorder("0.3rem solid rgba(0, 0, 0, 0.2)");
            }}
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
            placeholder={passwordPlaceholderMessage}
            borderColor={passwordBorder}
            onFocus={() => {
              setPasswordPlaceholderMessage("");
              setPasswordBorder("0.3rem solid rgba(0, 0, 0, 0.2)");
            }}
          />
        </GroupContainer>
        <RegisterButton type="submit">Sign up</RegisterButton>
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
