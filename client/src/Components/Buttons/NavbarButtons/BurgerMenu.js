// Dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// React Components
import NavbarButton from "./NavbarButton";
// Context API
import DisplayContext from "../../../Context/display/displayContext";

const Menu = styled.svg`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  fill: rgba(255, 255, 255, 0.9);
`;

const BurgerMenu = () => {
  const displayContext = useContext(DisplayContext);

  const { toggleMenuVisibility } = displayContext;

  return (
    <div style={{ marginLeft: "7vh" }}>
      <NavbarButton onClick={toggleMenuVisibility}>
        <Menu viewBox="0 0 100 80" width="21" height="21">
          <rect width="100" height="12" />
          <rect y="33" width="100" height="12" />
          <rect y="66" width="100" height="12" />
        </Menu>
      </NavbarButton>
    </div>
  );
};

export default BurgerMenu;
