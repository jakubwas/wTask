// Dependencies
import React from "react";
import styled from "styled-components";
// React Components
import SettingsButtonContainer from "../Containers/SettingsButtonContainer";

// React Components
import FeaturePreviewButton from "../Buttons/SettingsButtons/FeaturePreviewButton";
import SupportButton from "../Buttons/SettingsButtons/SupportButton";
import SettingsButton from "../Buttons/SettingsButtons/SettingsButton";
import LogoutButton from "../Buttons/SettingsButtons/LogoutButton";

const Container = styled.div`
  position: fixed;
  top: 4.7rem;
  right: 0.4rem;
  width: 20rem;
  height: 40rem;
  background: white;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.4);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SettingsDropDown = () => {
  return (
    <Container>
      <FeaturePreviewButton>What's new ?</FeaturePreviewButton>
      <SupportButton>Support</SupportButton>
      <SettingsButton>Settings</SettingsButton>
      <LogoutButton>Logout</LogoutButton>
    </Container>
  );
};

export default SettingsDropDown;
