import React, { useState } from "react";
import { LoginScreen } from "./styles";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import { RecoveryComponent } from "../../components/LoginComponent/RecoveryPassComponent";
import { RecoveryAcessComponent } from "../../components/LoginComponent/RecoveryAcessComponent";

import LogoEscola from "../../assets/LogoEscola.svg";

const LoginPage = () => {
  const [stepLoginComponent, setStepLoginComponent] =
    useState("LoginComponent");

  const handleForgotPasswordClick = () => {
    setStepLoginComponent("RecoveryComponent");
  };

  const handleReturnClick = () => {
    setStepLoginComponent("LoginComponent");
  };

  return (
    <LoginScreen>
      <div
        className="background-logo"
        style={{ backgroundImage: `url(${LogoEscola})` }}
      ></div>

      {stepLoginComponent === "LoginComponent" ? (
        <LoginComponent onForgotPasswordClick={handleForgotPasswordClick} />
      ) : stepLoginComponent === "RecoveryComponent" ? (
        <RecoveryComponent
          onReturnClick={(step) => setStepLoginComponent(step)}
        />
      ) : stepLoginComponent === "RecoveryAcess" ? (
        <RecoveryAcessComponent onReturnClick={handleReturnClick} />
      ) : null}
    </LoginScreen>
  );
};

export default LoginPage;
