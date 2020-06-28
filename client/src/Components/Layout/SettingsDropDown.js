// Dependencies
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 4.7rem;
  right: 0.4rem;
  width: 20rem;
  height: 40rem;
  background: white;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.4);
  border-radius: 7px;
`;

const SettingsDropDown = (props) => {
  return <Container>{props.children}</Container>;
};

export default SettingsDropDown;
