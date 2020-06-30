// Dependencies
import React from "react";
import styled from "styled-components";

const InfoHeader = styled.div`
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.5);
`;

const EmptyTaskListInfo = (props) => {
  return <InfoHeader>{props.children}</InfoHeader>;
};

export default EmptyTaskListInfo;
