// Dependencies
import React, { Fragment, useState } from "react";
import styled from "styled-components";
// React Components
import Navbar from "./Register/Navbar";
import bgImage from "./Register/bgImage.png";
import HomePageTtiles from "./Register/HomePageTitles";

const Container = styled.div`
  background-image: url(${bgImage});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Register = () => {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <HomePageTtiles />
      </Container>
    </Fragment>
  );
};

export default Register;
