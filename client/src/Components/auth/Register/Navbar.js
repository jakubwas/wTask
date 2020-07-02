// Dependencies
import React from "react";
import styled from "styled-components";
// Styled components
const NavigationBgContainer = styled.nav`
  width: 100vw;
  min-height: 4.3rem;
  background: rgba(26, 38, 57, 0.07);
  padding-bottom: 1rem;
  position: fixed;
  @media screen and (max-width: 1113px) {
    background: rgba(26, 38, 57, 0.92);
  }
`;
const NavigationContentContainer = styled.div`
  width: 93%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const AppTitle = styled.div`
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 1);
  padding-top: 1.5rem;
`;
// React Component
const Navbar = () => {
  // Future functionality: when register page will have sections
  // const [navProps, setNavProps] = useState({
  //   bg: "rgba(26, 38, 57, 0.02)",
  //   padding: 0,
  // });
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 50) {
  //       setNavProps({
  //         bg: "rgba(26, 38, 57, 0.9)",
  //         padding: "2.4rem",
  //       });
  //     } else {
  //       setNavProps({
  //         bg: "rgba(26, 38, 57, 0.02)",
  //         padding: 0,
  //       });
  //     }
  //   });
  // }, []);

  return (
    <NavigationBgContainer>
      <NavigationContentContainer>
        <AppTitle>WTask</AppTitle>
      </NavigationContentContainer>
    </NavigationBgContainer>
  );
};

export default Navbar;
