// Dependencies
import React from "react";
import styled from "styled-components";
// Styled-Components
const Container = styled.div`
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  font-size: 1.4rem;
  display: flex;
  cursor: pointer;

  &:hover {
    background: rgba(49, 111, 234, 1);
    color: rgba(255, 255, 255, 1);
  }
`;
// React Component
const SettingsButtonContainer = (props) => {
  return (
    <Container
      onClick={() => {
        props.onClickHandler();
      }}
    >
      {props.children}
    </Container>
  );
};

export default SettingsButtonContainer;
