// Dependencies
import React from "react";
import styled from "styled-components";

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
const HomePageTitles = () => {
  return (
    <TitlesContainer>
      <HomePageTitle>Organize your life</HomePageTitle>
      <HomePageSubtitle>
        with the best productivity app - WTask
      </HomePageSubtitle>
    </TitlesContainer>
  );
};

export default HomePageTitles;
