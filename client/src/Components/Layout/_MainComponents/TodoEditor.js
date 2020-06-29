// Dependencies
import React from "react";
// React Components
import EditorContainer from "../../Containers/EditorContainer";
import WorkspaceContainer from "../Workspace/WorkspaceContainer";
import TodoWorkspaceHeader from "../Workspace/TodoWorkspace/TodoWorkspaceHeader";
import TodoForm from "../Workspace/TodoWorkspace/Form/TodoForm";
import UncompletedTasks from "../Workspace/TodoWorkspace/Tasks/UncompletedTasks";
import CompletedTasks from "../Workspace/TodoWorkspace/Tasks/CompletedTasks";
import SectionSeparator from "../Workspace/TodoWorkspace/SectionSeparator";
import Task from "../Workspace/TodoWorkspace/Tasks/Task";

const TodoEditor = () => {
  return (
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
  );
};

export default TodoEditor;
