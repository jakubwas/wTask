// Dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Styled components
const NavigationBgContainer = styled.nav`
  width: 100vw;
  min-height: 4.3rem;
  background: ${(props) => props.bg};
  opacity: ${(props) => props.opacity};
  padding-bottom: ${(props) => props.padding};
  position: fixed;
`;
const NavigationContentContainer = styled.div`
  width: 93%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const AppTitle = styled.div`
  font-size: 2.5rem;
  color: white;
  padding-top: 1.5rem;
`;
// React Component
const Navbar = () => {
  const [navProps, setNavProps] = useState({
    bg: "rgba(26, 38, 57, 0.02)",
    padding: 0,
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        setNavProps({
          bg: "rgba(26, 38, 57, 0.9)",
          padding: "2.4rem",
        });
      } else {
        setNavProps({
          bg: "rgba(26, 38, 57, 0.02)",
          padding: 0,
        });
      }
    });
  }, []);

  return (
    <NavigationBgContainer bg={navProps.bg} padding={navProps.padding}>
      <NavigationContentContainer>
        <AppTitle>WTask</AppTitle>
      </NavigationContentContainer>
    </NavigationBgContainer>
  );
};

export default Navbar;
