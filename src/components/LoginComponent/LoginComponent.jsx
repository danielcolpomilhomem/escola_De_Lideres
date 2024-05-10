import React from "react";
import {LoginPageModal} from "./styled";
import { InputComponent } from "../Input/InputComponent";
import { ButtonLogin } from "../Button/ButtonLogin";

const LoginComponent = ({ onForgotPasswordClick }) => {

  const handleForgotPasswordClick = () => {
    onForgotPasswordClick("RecoveryComponent");
  };
  return (
    <LoginPageModal>
      <form action="">
      <h2>Login</h2>
        <InputComponent label={"Usuário"} placeholder={"nome@exemplo.com"} />
        <InputComponent
          type={"password"}
          label={"Senha"}
          placeholder={"Digite aqui"}
        />
        <div className="check-container">
          <input
            type="checkbox"
            id="scales"
            name="scales"
            style={{ width: "20px", height: "20px" }}
          />
          <h4>Entrar Automaticamente</h4>
        </div>

        <ButtonLogin
          backgroundColor={"#2849d9"}
          textColor={"white"}
          text={"Entrar"}
        ></ButtonLogin>

        <ButtonLogin
          textColor={"#2849d9"}
          text={"Esqueci minha senha"}
          onClick={handleForgotPasswordClick}
        />
      </form>
    </LoginPageModal>
  );
};

export default LoginComponent; 
