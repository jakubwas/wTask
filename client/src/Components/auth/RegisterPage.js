// Dependencies
import React, { Fragment, useState } from "react";
import styled from "styled-components";
// React Components
import Navbar from "./Register/Navbar";
import bgImage from "./Register/bgImage.png";
import HomePageTtiles from "./Register/HomePageTitles";
import RegisterForm from "./Register/RegisterForm";

const Container = styled.div`
  background-image: url(${bgImage});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Register = (props) => {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <HomePageTtiles />
        <RegisterForm history={props.history} />
      </Container>
    </Fragment>
  );
};

export default Register;
