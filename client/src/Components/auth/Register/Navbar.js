// Dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";
//

const Container = styled.nav`
  width: 100vw;
  min-height: 4.3rem;
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.bg};
  opacity: ${(props) => props.opacity};
  padding-bottom: ${(props) => props.padding};
  position: fixed;
`;
const AppTitle = styled.div`
  font-size: 2.5rem;
  color: white;
  margin-left: 15vh;
  padding-top: 1.5rem;
`;

const LoginButton = styled.button`
  background: rgba(0, 0, 0, 0);
  color: white;
  margin-right: 25vh;
  font-size: 1.5rem;
  border: none;
  outline: none;
  cursor: pointer;
`;

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
    <Container bg={navProps.bg} padding={navProps.padding}>
      <AppTitle>WTask</AppTitle>
      <LoginButton>Sign in</LoginButton>
    </Container>
  );
};

export default Navbar;
