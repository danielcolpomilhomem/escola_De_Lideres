import React, { useState } from "react";
import InputContainer, { Label, Input, IconPass } from "./styled";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const InputComponent = ({ label, type, placeholder, onChange, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    let { value } = event.target;
    if (type === "date") {
      value = formatValue(value);
    }
    onChange(value);
  };
  const handleBlur = (event) => {
    const { value } = event.target;
    if (type === "email" && value.trim() !== "" && !validateEmail(value)) {
      setError("Insira um formato de email válido");
    } else if (type === "tel" && value.trim() !== "" && !validatePhone(value)) {
      setError("Insira um formato de telefone válido");
    } else if (type === "date" && value.trim() !== "" && !validateDate(value)) {
      setError("Insira um formato de data válido (YYYY-MM-DD)");
    } else {
      setError("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/; 
    return regex.test(phone);
  };

  const validateDate = (date) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
  };

  const formatValue = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(\d{4})-(\d{2})(\d)/, "$1-$2-$3") 
      .slice(0, 10); 
  };
  const valueToReturn = error ? undefined : rest.value;

  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        {...rest}
        maxLength={type === "date" ? 10 : undefined}

        value={valueToReturn}
      />
      {type === "password" && (
        <IconPass onClick={togglePasswordVisibility}>
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </IconPass>
      )}
      {error && <span style={{ color: "red" }}>{error}</span>}
    </InputContainer>
  );
};
