// Dependencies
import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
// React Components
import EditorContainer from "../../Containers/EditorContainer";
import AppContainer from "../../Containers/AppContainer";
import Menu from "./Menu";
import SettingsDropDown from "../_MainComponents/SettingsDropDown";
// Contaxt API
import DisplayContext from "../../../Context/display/displayContext";

const HabitsEditor = () => {
  const displayContext = useContext(DisplayContext);

  const { menuVisibility, settingsVisibility } = displayContext;

  return (
    <AppContainer>
      <Menu />
      {settingsVisibility && <SettingsDropDown />}
      <CSSTransition in={menuVisibility} timeout={350} classNames="content">
        <EditorContainer>
          <h1>Habits Editor</h1>
        </EditorContainer>
      </CSSTransition>
    </AppContainer>
  );
};

export default HabitsEditor;
