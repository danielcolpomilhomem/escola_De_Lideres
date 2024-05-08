import React, { useState } from "react";
import InputContainer, { Label, Input, IconPass } from "./styled";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const InputComponent = ({ label, type, placeholder, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        {...rest}
      />
      {type === "password" && (
        <IconPass onClick={togglePasswordVisibility}>
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </IconPass>
      )}
    </InputContainer>
  );
};
