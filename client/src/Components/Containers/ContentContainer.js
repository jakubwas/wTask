import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = (props) => {
  return (
    <Container>
      <h1>Hello</h1>
    </Container>
  );
};

export default ContentContainer;
