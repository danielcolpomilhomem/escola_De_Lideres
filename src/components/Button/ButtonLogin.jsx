import React from "react";
import LoginButton from "./styled";

export const ButtonLogin = ({ text, textColor, backgroundColor, onClick }) => {
  const handleClick = () => {
    onClick();
  };
  
  return (
    <LoginButton
      onClick={handleClick}
      textColor={textColor}
      backgroundColor={backgroundColor}
    >
      {text}
    </LoginButton>
  );
};
