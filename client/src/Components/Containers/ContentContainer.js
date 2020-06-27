// Dependencies
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-left: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default ContentContainer;
