// Dependencies
import React, { Fragment, useContext } from "react";
import { CSSTransition } from "react-transition-group";
// React Components
import EditorContainer from "../../Containers/EditorContainer";
import Navbar from "./Navbar";
import AppContainer from "../../Containers/AppContainer";
import Menu from "./Menu";
import SettingsDropDown from "../_MainComponents/SettingsDropDown";
// Contaxt API
import DisplayContext from "../../../Context/display/displayContext";
// React Component
const HabitsEditor = () => {
  const displayContext = useContext(DisplayContext);

  const { menuVisibility, settingsVisibility } = displayContext;

  return (
    <Fragment>
      <Navbar />
      <AppContainer>
        <Menu />
        {settingsVisibility && <SettingsDropDown />}
        <CSSTransition in={menuVisibility} timeout={350} classNames="content">
          <EditorContainer>
            <h1>Habits Editor</h1>
          </EditorContainer>
        </CSSTransition>
      </AppContainer>
    </Fragment>
  );
};

export default HabitsEditor;
