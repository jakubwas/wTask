// Dependencies
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 5.5vh;
  right: 1vw;
  width: 20rem;
  height: 40rem;
  background: red;
`;

const SettingsDropDown = (props) => {
  return <Container>{props.children}</Container>;
};

export default SettingsDropDown;
