import React from "react";
import LoginButton from "./styled";

export const ButtonLogin = ({ text, textColor, backgroundColor }) => {
  return (
    <LoginButton textColor={textColor} backgroundColor={backgroundColor}>
      {text}
    </LoginButton>
  );
};
