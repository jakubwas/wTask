// Dependencies
import React from "react";
import styled from "styled-components";
// React Components
import FeaturePreviewButton from "../SettingsDropDown/FeaturePreviewButton";
import SupportButton from "../SettingsDropDown/SupportButton";
import SourceCodeButton from "../SettingsDropDown/SourceCodeButton";
import SettingsButton from "../SettingsDropDown/SettingsButton";
import LogoutButton from "../SettingsDropDown/LogoutButton";
// Styled-Components
const Container = styled.div`
  position: fixed;
  top: 4.7rem;
  right: 0.4rem;
  width: 21rem;
  height: 40rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0.1rem 0.8rem 0 rgba(0, 0, 0, 0.4);
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Separator = styled.div`
  width: 100%;
  height: 0.2rem;
  margin: 0.5rem 0;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.3);
`;
const VersionInfo = styled.div`
  font-size: 1.2rem;
  color: grey;
`;
const AuthorInfo = styled.div`
  font-size: 1.3rem;
  color: grey;
  text-align: center;
`;
const AuthorWebsiteLink = styled.a`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 1rem;
`;
// React Component
const SettingsDropDown = () => {
  return (
    <Container>
      <Separator />
      <FeaturePreviewButton />
      <SupportButton />
      <SourceCodeButton />
      <SettingsButton />
      <Separator />
      <LogoutButton />
      <Separator />
      <VersionInfo style={{ margin: "1rem 0" }}>
        Version: <span style={{ color: "black" }}>1.0.0</span>
      </VersionInfo>
      <AuthorInfo>App designed & developed by Jakub Was</AuthorInfo>
      <AuthorWebsiteLink href="http://wasjakub.com" target="_blank">
        wasjakub.com
      </AuthorWebsiteLink>
    </Container>
  );
};

export default SettingsDropDown;
