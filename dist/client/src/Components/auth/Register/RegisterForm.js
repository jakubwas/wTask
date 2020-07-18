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
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 2rem;
  @media screen and (max-width: 520px) {
    width: 100%;
  }
`;
const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.8rem;
`;
const RegisterTitle = styled.h1`
  font-size: 3rem;
  color: rgba(255, 255, 255, 1);
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  margin-left: 1.2rem;
  @media screen and (max-width: 520px) {
    font-size: 2.5rem;
    font-weight: 500;
  }
`;
const Form = styled.form``;
const GroupContainer = styled.div`
  margin: 1.7rem 0;
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
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  background: rgba(108, 99, 255, 1);
  outline: none;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: rgba(26, 17, 184, 1);
  }
`;
const LoginContainer = styled.div`
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
  font-size: 1.3rem;
  margin-top: 3.8rem;
`;
const LoginButton = styled.button`
  margin-top: 0.5rem;
  width: 50%;
  font-size: 2rem;
  font-weight: 600;
  border: 0.1rem solid rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 1);
  padding: 0.3rem;
  cursor: pointer;
  outline: none;
  transition: all 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 1);
    color: rgba(0, 0, 0, 1);
  }
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
    "0.1rem solid rgba(0, 0, 0, 0.2)"
  );
  // Email validation
  const [emailPlaceholderMessage, setEmailPlaceholderMessage] = useState("");
  const [emaildBorder, setEmailBorder] = useState(
    "0.1rem solid rgba(0, 0, 0, 0.2)"
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
      <RegisterContainer>
        <svg
          viewBox="0 0 512 512"
          width="30px"
          height="30px"
          fill="rgba(255,255,255,1)"
        >
          <path
            d="M498.791,161.127c-17.545-17.546-46.094-17.545-63.645,0.004c-5.398,5.403-39.863,39.896-45.128,45.166V87.426
			c0-12.02-4.681-23.32-13.181-31.819L334.412,13.18C325.913,4.68,314.612,0,302.592,0H45.018c-24.813,0-45,20.187-45,45v422
			c0,24.813,20.187,45,45,45h300c24.813,0,45-20.187,45-45V333.631L498.79,224.767C516.377,207.181,516.381,178.715,498.791,161.127
			z M300.019,30c2.834,0,8.295-0.491,13.18,4.393l42.426,42.427c4.76,4.761,4.394,9.978,4.394,13.18h-60V30z M360.018,467
			c0,8.271-6.728,15-15,15h-300c-8.271,0-15-6.729-15-15V45c0-8.271,6.729-15,15-15h225v75c0,8.284,6.716,15,15,15h75v116.323
			c0,0-44.254,44.292-44.256,44.293l-21.203,21.204c-1.646,1.646-2.888,3.654-3.624,5.863l-21.214,63.64
			c-1.797,5.39-0.394,11.333,3.624,15.35c4.023,4.023,9.968,5.419,15.35,3.624l63.64-21.213c2.209-0.736,4.217-1.977,5.863-3.624
			l1.82-1.82V467z M326.378,312.427l21.213,21.213l-8.103,8.103l-31.819,10.606l10.606-31.82L326.378,312.427z M368.8,312.422
			l-21.213-21.213c11.296-11.305,61.465-61.517,72.105-72.166l21.213,21.213L368.8,312.422z M477.573,203.558l-15.463,15.476
			l-21.213-21.213l15.468-15.481c5.852-5.849,15.366-5.848,21.214,0C483.426,188.19,483.457,197.673,477.573,203.558z"
          />
          <path d="M285.018,150h-210c-8.284,0-15,6.716-15,15s6.716,15,15,15h210c8.284,0,15-6.716,15-15S293.302,150,285.018,150z" />
          <path d="M225.018,210h-150c-8.284,0-15,6.716-15,15s6.716,15,15,15h150c8.284,0,15-6.716,15-15S233.302,210,225.018,210z" />
          <path d="M225.018,270h-150c-8.284,0-15,6.716-15,15s6.716,15,15,15h150c8.284,0,15-6.716,15-15S233.302,270,225.018,270z" />
          <path d="M225.018,330h-150c-8.284,0-15,6.716-15,15s6.716,15,15,15h150c8.284,0,15-6.716,15-15S233.302,330,225.018,330z" />
          <path d="M285.018,422h-90c-8.284,0-15,6.716-15,15s6.716,15,15,15h90c8.284,0,15-6.716,15-15S293.302,422,285.018,422z" />
        </svg>
        <RegisterTitle>Create an Account</RegisterTitle>
      </RegisterContainer>
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
            borderColor={"0.1rem solid rgba(0, 0, 0, 0.2)"}
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
              setEmailBorder("0.1rem solid rgba(0, 0, 0, 0.2)");
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
              setPasswordBorder("0.1rem solid rgba(0, 0, 0, 0.2)");
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
              setPasswordBorder("0.1rem solid rgba(0, 0, 0, 0.2)");
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
