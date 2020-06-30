// Dependencies
import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
// React Components
import AppContainer from "../../Containers/AppContainer";
import Menu from "../_MainComponents/Menu";
import SettingsDropDown from "./SettingsDropDown";
import EditorContainer from "../../Containers/EditorContainer";
import WorkspaceContainer from "../Workspace/WorkspaceContainer";
import TodoWorkspaceHeader from "../Workspace/TodoWorkspace/TodoWorkspaceHeader";
import TodoForm from "../Workspace/TodoWorkspace/Form/TodoForm";
import UncompletedTasks from "../Workspace/TodoWorkspace/Tasks/UncompletedTasks";
import CompletedTasks from "../Workspace/TodoWorkspace/Tasks/CompletedTasks";
import SectionSeparator from "../Workspace/TodoWorkspace/SectionSeparator";
// Context API
import DisplayContext from "../../../Context/display/displayContext";

const TodoEditor = () => {
  const displayContext = useContext(DisplayContext);

  const { menuVisibility, settingsVisibility } = displayContext;

  return (
    <AppContainer>
      <Menu />
      {settingsVisibility && <SettingsDropDown />}
      <CSSTransition in={menuVisibility} timeout={350} classNames="content">
        <EditorContainer>
          <WorkspaceContainer>
            <TodoWorkspaceHeader />
            <TodoForm />
            <SectionSeparator />
            <UncompletedTasks />
            <SectionSeparator />
            <CompletedTasks />
          </WorkspaceContainer>
        </EditorContainer>
      </CSSTransition>
    </AppContainer>
  );
};

export default TodoEditor;
