// Dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// React-Components
import BurgerMenu from "../Navbar/BurgerMenu";
import Settings from "../Navbar/SettingsButton";
// Context API
import AuthContext from "../../../Context/auth/authContext";
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
      <Settings />
    </NavigationBar>
  );
};

export default Navbar;
