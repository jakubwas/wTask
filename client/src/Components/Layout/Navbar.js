import React, { useContext } from "react";
import styled from "styled-components";

import BurgerMenu from "../Buttons/BurgerMenu";
import RightSideNavIcon from "../Containers/RightSideNavIcons";
import Settings from "../Buttons/SettingsButton";
import InfoButton from "../Buttons/InfoButton";

const NavigationBar = styled.div`
  min-height: 5vh;
  background: #506578;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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
