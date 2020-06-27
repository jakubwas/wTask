import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background: red;
`;

const ContentContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default ContentContainer;
