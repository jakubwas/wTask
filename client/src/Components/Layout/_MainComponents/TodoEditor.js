// Dependencies
import React from "react";
// React Components
import EditorContainer from "../../Containers/EditorContainer";
import WorkspaceContainer from "../../Containers/WorkspaceContainer";
import TodoWorkspaceHeader from "../Workspace/TodoWorkspace//Form/TodoWorkspaceHeader";
import TodoForm from "../Workspace/TodoWorkspace/Form/TodoForm";

const TodoEditor = () => {
  return (
    <EditorContainer>
      <WorkspaceContainer>
        <TodoWorkspaceHeader />
        <TodoForm />
      </WorkspaceContainer>
    </EditorContainer>
  );
};

export default TodoEditor;
