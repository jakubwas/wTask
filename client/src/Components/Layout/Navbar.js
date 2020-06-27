// Dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// Components
import BurgerMenu from "../Buttons/NavbarButtons/BurgerMenu";
import RightSideNavIcon from "../Containers/RightSideNavIcons";
import Settings from "../Buttons/NavbarButtons/SettingsButton";
import InfoButton from "../Buttons/NavbarButtons/InfoButton";

// Styled Components
const NavigationBar = styled.div`
  min-height: 5vh;
  background: #316fea;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
