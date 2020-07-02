// Dependencies
import React, { Fragment, useState } from "react";
import styled from "styled-components";
// React Components
import Navbar from "./Register/Navbar";
import bgImage from "./Register/bgImage.png";
import HomePageTtiles from "./Register/HomePageTitles";
import RegisterForm from "./Register/RegisterForm";

const LandingPageBgContainer = styled.div`
  background-image: url(${bgImage});
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
`;
const LandingPageContentContainer = styled.div`
  width: 93%;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1113px) {
    padding-bottom: 10rem;
  }
`;

const Register = (props) => {
  return (
    <Fragment>
      <Navbar />
      <LandingPageBgContainer>
        <LandingPageContentContainer>
          <HomePageTtiles />
          <RegisterForm history={props.history} />
        </LandingPageContentContainer>
      </LandingPageBgContainer>
    </Fragment>
  );
};

export default Register;
