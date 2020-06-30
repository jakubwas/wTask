import React, { Fragment, useState, useContext, useEffect } from "react";
import styled from "styled-components";
import TodoContext from "../../../../../Context/todo/todoContext";

const Container = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  margin: 1.2rem 1.2rem 0 0;
  border: ${(props) => props.border};
  background: ${(props) => props.bgColor};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.bgHover};
  }
`;

const Svg = styled.svg`
  width: 0.9rem;
  height: 0.9rem;
`;

const CheckBoxButton = ({ id, priority, status }) => {
  const todoContext = useContext(TodoContext);
  const { toggleStatus } = todoContext;

  const [svgDsiaply, setSvgDisplay] = useState("none");
  const [colorPallete, setColorPalette] = useState({});

  useEffect(() => {
    switch (priority) {
      case 0:
        if (status === "uncompleted") {
          setColorPalette({
            border: "1px solid rgb(128,128,128)",
            bgColor: "rgb(255, 255, 255, 1)",
            bgHover: "rgba(0, 0, 0, 0.1)",
            fill: "rgba(0, 0, 0, 0.5)",
          });
        } else {
          setColorPalette({
            border: "none",
            bgColor: "rgb(128,128,128)",
            fill: "rgb(255, 255, 255)",
          });
        }
        break;
      case 1:
        if (status === "uncompleted") {
          setColorPalette({
            border: "2px solid rgba(0, 0, 255, 0.8)",
            bgColor: "rgb(255, 255, 255)",
            bgHover: "rgba(0, 0, 255, 0.15)",
            fill: "rgba(0, 0, 255, 0.8)",
          });
        } else {
          setColorPalette({
            border: "none",
            bgColor: "rgba(0, 0, 255, 0.8)",
            fill: "rgb(255,255,255)",
          });
        }
        break;
      case 2:
        if (status === "uncompleted") {
          setColorPalette({
            border: "2px solid rgba(219, 147, 64, 0.8)",
            bgColor: "rgb(255, 255, 255)",
            bgHover: "rgba(219, 147, 64, 0.15)",
            fill: "rgba(219, 147, 64, 0.8)",
          });
        } else {
          setColorPalette({
            border: "none",
            bgColor: "rgba(219, 147, 64, 0.8)",
            fill: "rgb(255, 255, 255)",
          });
        }
        break;
      case 3:
        if (status === "uncompleted") {
          setColorPalette({
            border: "2px solid rgba(255, 0, 0, 0.8)",
            bgColor: "rgb(255, 255, 255)",
            bgHover: "rgba(255, 0, 0, 0.15)",
            fill: "rgba(255, 0, 0, 0.8)",
          });
        } else {
          setColorPalette({
            border: "none",
            bgColor: "rgba(255, 0, 0, 0.8)",
            fill: "rgb(255, 255, 255)",
          });
        }
        break;

      default:
        break;
    }
  }, []);

  return (
    <Fragment>
      {status === "uncompleted" ? (
        <Container
          border={colorPallete.border}
          bgColor={colorPallete.bgColor}
          bgHover={colorPallete.bgHover}
          onMouseEnter={() => {
            setSvgDisplay("block");
          }}
          onMouseLeave={() => {
            setSvgDisplay("none");
          }}
          onClick={() => {
            console.log("aaaa");
            toggleStatus(id);
          }}
        >
          <Svg
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style={{ display: `${svgDsiaply}` }}
            fill={colorPallete.fill}
          >
            <path
              d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0
			c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7
			C514.5,101.703,514.499,85.494,504.502,75.496z"
            />
          </Svg>
        </Container>
      ) : (
        <Container
          border={colorPallete.border}
          bgColor={colorPallete.bgColor}
          bgHover={colorPallete.bgHover}
          onClick={() => {
            toggleStatus(id);
          }}
        >
          <Svg
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style={{ display: "inlineBlock" }}
            fill={colorPallete.fill}
          >
            <path
              d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0
    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7
    C514.5,101.703,514.499,85.494,504.502,75.496z"
            />
          </Svg>
        </Container>
      )}
    </Fragment>
  );
};

export default CheckBoxButton;
