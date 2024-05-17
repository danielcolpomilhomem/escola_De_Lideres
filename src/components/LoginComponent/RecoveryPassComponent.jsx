import React, { useState } from "react";
import { LoginPageModal, ModalStyle, LoginButton } from "./styled";
import { InputComponent } from "../Input/InputComponent";
import { ButtonLogin } from "../Button/ButtonLogin";
import { AiOutlineLeft, AiOutlineCheck } from "react-icons/ai";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export const RecoveryComponent = ({ onReturnClick }) => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    user: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.user === "admin") {
      setOpen(true);
    } else {
      alert("Dados inválidos");
    }
  };

  const handleReturn = (step) => {
    onReturnClick(step);
    console.log("step", step);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <LoginPageModal width="100%" height="100%" top="50%">
      <form onSubmit={handleSubmit}>
        <h2>
          <button type="button" onClick={() => handleReturn("LoginComponent")}>
            <AiOutlineLeft />
          </button>
          Recuperar Senha
        </h2>
        <h4>
          Esqueceu sua senha? Não se preocupe, preencha seu endereço de e-mail
          cadastrado e enviaremos um link para você redefinir sua senha. Caso
          não lembre do e-mail que você cadastrou, clique no botão “Recuperar
          acesso” e siga os passos para recuperar sua conta.
        </h4>
        <InputComponent
          label={"Usuário"}
          placeholder={"Usuário"}
          required
          onChange={(value) => handleInputChange("user", value)}
        />

        <LoginButton backgroundColor="#2849d9" textColor="white" type="submit">
          Enviar lembrete de senha
        </LoginButton>

        <LoginButton
          textColor="#2849d9"
          type="button"
          onClick={() => handleReturn("RecoveryAcess")}
        >
          Recuperar Senha
        </LoginButton>
      </form>

      <Modal
        open={open}
        styles={{
          modal: {
            alignItems: "center",
            top: "30%",
            borderRadius: "5px",
          },
        }}
        onClose={handleCloseModal}
      >
        <ModalStyle>
          <h2>
            <AiOutlineCheck />
            Solicitação enviada
          </h2>
          <p>
            Sua solicitação foi enviada! Caso o endereço enviado esteja em nosso
            banco de dados, você receberá uma mensagem para redefinir sua senha.
          </p>
          <button
            type="button"
            onClick={() => {
              handleReturn("LoginComponent");
            }}
          >
            Fechar
          </button>
        </ModalStyle>
      </Modal>
    </LoginPageModal>
  );
};
