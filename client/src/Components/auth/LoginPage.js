// Dependencies
import React from "react";
import styled from "styled-components";
// React Components
import SignInForm from "./Login/SignInForm";
// Styled-Components
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(235, 235, 235, 1);
`;
// React Component
const LoginPage = (props) => {
  return (
    <Container>
      <SignInForm history={props.history} />
    </Container>
  );
};

export default LoginPage;
