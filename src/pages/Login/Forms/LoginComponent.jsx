import React, { useState, useContext, useEffect } from "react";
import { LoginPageModal, LoginButton } from "./styled";
import { InputComponent } from "../../../components/Input/InputComponent";
import { AuthContext } from "../../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginComponent = ({ onForgotPasswordClick }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  // Recuperar o estado do checkbox "Entrar Automaticamente" do localStorage
  useEffect(() => {
    const rememberMe = JSON.parse(localStorage.getItem("rememberMe"));
    if (rememberMe !== null) {
      setFormData((prevData) => ({
        ...prevData,
        rememberMe: rememberMe,
      }));
    }
  }, []);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleForgotPasswordClick = () => {
    onForgotPasswordClick("RecoveryComponent");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulário submetido:", formData);
    if (
      formData.email === "admin@gmail.com" &&
      formData.password === "123mudar"
    ) {
      setAuth(true);
      navigate("/Learning");
      // Atualizar o estado do checkbox "Entrar Automaticamente" no localStorage
      localStorage.setItem("rememberMe", JSON.stringify(formData.rememberMe));
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <LoginPageModal>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <InputComponent
          label={"Usuário"}
          placeholder={"nome@exemplo.com"}
          type={"email"}
          name={"email"}
          value={formData.email}
          onChange={(value) => handleInputChange("email", value)}
        />
        <InputComponent
          type={"password"}
          required
          label={"Senha"}
          placeholder={"Digite aqui"}
          name={"password"}
          value={formData.password}
          onChange={(value) => handleInputChange("password", value)}
        />
        <div className="check-container">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={(event) =>
              handleInputChange("rememberMe", event.target.checked)
            }
          />
          <label htmlFor="rememberMe">Entrar Automaticamente</label>
        </div>

        <LoginButton
          backgroundColor={"#2849d9"}
          textColor={"white"}
          type="submit"
          required
        >
          Entrar
        </LoginButton>

        <LoginButton
          textColor={"#2849d9"}
          text={"Esqueci minha senha"}
          onClick={handleForgotPasswordClick}
        >
          Esqueci minha senha
        </LoginButton>
      </form>
    </LoginPageModal>
  );
};

export default LoginComponent;
