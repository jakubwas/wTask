// Dependencies
import React from "react";
// React Components
import NavbarButton from "./NavbarButton";
// React Component
const InfoButton = () => {
  return (
    <NavbarButton>
      <svg viewBox="0 0 128 128" width="21px" height="21px">
        <path
          fill="#fff"
          d="M64,14c27.6,0,50,22.4,50,50c0,27.6-22.4,50-50,50c-27.6,0-50-22.4-50-50C14,36.4,36.4,14,64,14"
        />
        <path
          fill="#e6e7e7"
          d="M64,14c-0.2,0-0.4,0-0.6,0c-1.5,0-3.1,0.1-4.6,0.3c-0.3,0-0.7,0.1-1,0.1 c24.6,3.1,43.7,24.1,43.7,49.6c0,25.5-19.1,46.5-43.7,49.6c0.5,0.1,1,0.1,1.6,0.2c1.2,0.1,2.5,0.2,3.7,0.2c0.3,0,0.6,0,0.9,0 c27.6,0,50-22.4,50-50C114,36.4,91.6,14,64,14"
        />
        <path
          fill="#454b54"
          d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17 c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"
        />
        <path
          fill="#454b54"
          d="M64 42.7c-1.7 0-3 1.3-3 3s1.3 3 3 3c1.7 0 3-1.3 3-3S65.7 42.7 64 42.7zM64 93c-1.7 0-3-1.3-3-3V62.3c0-1.7 1.3-3 3-3 1.7 0 3 1.3 3 3V90C67 91.7 65.7 93 64 93z"
        />
      </svg>
    </NavbarButton>
  );
};

export default InfoButton;
