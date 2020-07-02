// Dependencies
import React from "react";
import styled from "styled-components";
// Styled-Components
const Container = styled.div`
  display: flex;
  margin-right: 7vh;
`;
// React Component
const RightSideNavIcons = (props) => {
  return <Container>{props.children}</Container>;
};

export default RightSideNavIcons;
