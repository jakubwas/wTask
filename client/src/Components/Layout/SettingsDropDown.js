// Dependencies
import React from "react";
import styled from "styled-components";
// React Components
import FeaturePreviewButton from "../Buttons/SettingsButtons/FeaturePreviewButton";
import SupportButton from "../Buttons/SettingsButtons/SupportButton";
import SourceCodeButton from "../Buttons/SettingsButtons/SourceCodeButton";
import SettingsButton from "../Buttons/SettingsButtons/SettingsButton";
import LogoutButton from "../Buttons/SettingsButtons/LogoutButton";

const Container = styled.div`
  position: fixed;
  top: 4.7rem;
  right: 0.4rem;
  width: 21rem;
  height: 40rem;
  background: white;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.4);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Separator = styled.div`
  width: 100%;
  height: 2px;
  margin: 0.5rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
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
