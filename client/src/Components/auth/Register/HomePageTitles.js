// Dependencies
import React from "react";
import styled from "styled-components";
// Styled-Components
const TitlesContainer = styled.div`
  flex-basis: 64rem;
  @media screen and (max-width: 1200px) {
    margin-top: 14rem;
    margin-bottom: 7rem;
  }
`;
const HomePageTitle = styled.h1`
  color: white;
  font-size: 7rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  @media screen and (max-width: 1200px) {
    font-size: 4rem;
  }
`;
const HomePageSubtitle = styled.h2`
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: italic;
  font-size: 2.5rem;
  @media screen and (max-width: 1200px) {
    font-size: 1.4rem;
  }
`;
const HomePageSubText = styled.h3`
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: italic;
  font-size: 1.3rem;
  @media screen and (max-width: 1200px) {
    margin-top: 0.5rem;
    font-size: 1.1rem;
  }
`;
// React-Component
const HomePageTitles = () => {
  return (
    <TitlesContainer>
      <HomePageTitle>Organize your life</HomePageTitle>
      <HomePageSubtitle>
        with the best productivity app - WTask
      </HomePageSubtitle>
      <HomePageSubText>
        WTask helps you take control of your tasks and saves you time by
        bringing them all into your preferred task manager.
      </HomePageSubText>
    </TitlesContainer>
  );
};

export default HomePageTitles;
