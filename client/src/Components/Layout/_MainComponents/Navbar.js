// Dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// React-Components
import BurgerMenu from "../Navbar/BurgerMenu";
import RightSideNavIcon from "../Navbar/RightSideNavIcons";
import Settings from "../Navbar/SettingsButton";
import InfoButton from "../Navbar/InfoButton";
// Styled Components
const NavigationBar = styled.div`
  height: 4.3rem;
  background: rgba(26, 38, 57, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
`;
// React Component
const Navbar = () => {
  return (
    <NavigationBar>
      <BurgerMenu />
      <RightSideNavIcon>
        <Settings />
      </RightSideNavIcon>
    </NavigationBar>
  );
};

export default Navbar;
