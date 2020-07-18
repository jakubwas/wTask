// Dependencies
import React, { Fragment, useContext } from "react";
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
const AppLogo = styled.h1`
  margin-left: 1rem;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.8);
  font-family: "Pacifico", cursive;
  font-weight: 400;
`;
const RightIconsContainer = styled.div`
  display: flex;
`;
const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Info = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  font-style: italic;
  margin-right: 0.8rem;
`;
const Email = styled.h2`
  font-size: 1.1rem;
  font-style: italic;
  letter-spacing: 0.1rem;
  color: rgba(255, 255, 255, 0.8);
`;
// React Component
const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  return (
    <NavigationBar>
      <AppLogo>WTask</AppLogo>
      <RightIconsContainer>
        {user && (
          <UserInfoContainer>
            <Info>Logged in as </Info>
            <Email>{user.email}</Email>
          </UserInfoContainer>
        )}
        <BurgerMenu />
        <Settings />
      </RightIconsContainer>
    </NavigationBar>
  );
};

export default Navbar;
