// Dependencies
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-right: 7vh;
`;

const RightSideNavIcons = (props) => {
  return <Container>{props.children}</Container>;
};

export default RightSideNavIcons;
