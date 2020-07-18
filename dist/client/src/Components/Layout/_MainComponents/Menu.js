// Dependencies
import React, { useContext } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
// React Components
import MenuContainer from "../../Containers/MenuContainer";
// Context API
import DisplayContext from "../../../Context/display/displayContext";
// Styled-Components
const Title = styled.h1`
  color: rgba(0, 0, 0, 1);
  font-size: 2.5rem;
  margin-top: 3rem;
  text-align: center;
`;
const Subtitle = styled.h3`
  color: rgba(0, 0, 0, 1);
  font-size: 1.5rem;
  width: 90%;
  margin: 1.5rem auto;
  text-align: center;
`;

// React Component
const Menu = () => {
  const displayContext = useContext(DisplayContext);
  const { menuVisibility } = displayContext;

  return (
    <div>
      <CSSTransition
        in={menuVisibility}
        timeout={350}
        appear={true}
        unmountOnExit
        classNames="menu"
      >
        <MenuContainer>
          <Title>
            Free up <br /> your <br /> mental space
          </Title>
          <Subtitle>
            Regain clarity and calmness by getting all those tasks out of your
            head and onto your to-do list
          </Subtitle>
        </MenuContainer>
      </CSSTransition>
    </div>
  );
};

export default Menu;
