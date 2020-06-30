// Dependencies
import React from "react";
import styled from "styled-components";

const TitlesContainer = styled.div`
  margin-left: 15vh;
`;
const HomePageTitle = styled.h1`
  color: white;
  font-size: 7rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;
const HomePageSubtitle = styled.h2`
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 2.5rem;
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
