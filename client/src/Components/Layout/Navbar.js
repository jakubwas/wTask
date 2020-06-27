// Dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// Components
import BurgerMenu from "../Buttons/BurgerMenu";
import RightSideNavIcon from "../Containers/RightSideNavIcons";
import Settings from "../Buttons/SettingsButton";
import InfoButton from "../Buttons/InfoButton";

// Styled Components
const NavigationBar = styled.div`
  min-height: 5vh;
  background: #1a2639;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 7px solid black;
`;

// React Component
const Navbar = () => {
  return (
    <NavigationBar>
      <BurgerMenu />
      <RightSideNavIcon>
        <InfoButton />
        <Settings />
      </RightSideNavIcon>
    </NavigationBar>
  );
};

export default Navbar;
