// Dependencies
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  font-size: 1.4rem;
  display: flex;
  cursor: pointer;

  &:hover {
    background: #316fea;
    color: white;
  }
`;

const SettingsButtonContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default SettingsButtonContainer;
