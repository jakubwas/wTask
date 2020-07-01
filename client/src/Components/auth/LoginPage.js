// Dependencies
import React from "react";
import styled from "styled-components";
// React Components
import SignInForm from "./Login/SignInForm";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const LoginPage = (props) => {
  return (
    <Container>
      <SignInForm history={props.history} />
    </Container>
  );
};

export default LoginPage;
