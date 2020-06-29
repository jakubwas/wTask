import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  margin: 1.2rem 1.2rem 0 0;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: white;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Svg = styled.svg`
  width: 1.2rem;
  height: 1.2rem;
`;

const CheckBoxButton = () => {
  const [svgDsiaply, setSvgDisplay] = useState("none");

  return (
    <Container
      onMouseEnter={() => {
        setSvgDisplay("block");
      }}
      onMouseLeave={() => {
        setSvgDisplay("none");
      }}
    >
      <Svg
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style={{ display: `${svgDsiaply}` }}
      >
        <path
          d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0
			c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7
			C514.5,101.703,514.499,85.494,504.502,75.496z"
        />
      </Svg>
    </Container>
  );
};

export default CheckBoxButton;
