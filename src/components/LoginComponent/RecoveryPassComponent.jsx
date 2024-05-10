import React, { useState } from "react";
import { LoginPageModal, ModalStyle } from "./styled";
import { InputComponent } from "../Input/InputComponent";
import { ButtonLogin } from "../Button/ButtonLogin";
import { AiOutlineLeft, AiOutlineCheck } from "react-icons/ai";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export const RecoveryComponent = ({ onReturnClick }) => {
  const [open, setOpen] = useState(false);

  const handleReturn = (step) => {
    onReturnClick(step);
    console.log("step", step);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <LoginPageModal>
      <form action="">
      <h2>
        <button onClick={() => handleReturn("LoginComponent")}>
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
        <InputComponent label={"Usuário"} placeholder={"nome@exemplo.com"} />
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
          backgroundColor="#2849d9"
          textColor="white"
          text="Enviar lembrete de senha"
          onClick={handleOpenModal}
        />

        <ButtonLogin
          textColor="#2849d9"
          text="Recuperar Senha"
          onClick={() => handleReturn("RecoveryAcess")}
        />
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
      >
        <ModalStyle>
          <h2>
            {" "}
            <AiOutlineCheck></AiOutlineCheck>Solicitação enviada
          </h2>
          <p>
            Sua solicitação foi enviada! Caso o endereço enviado esteja em nosso
            banco de dados, você receberá uma mensagem para redefinir sua senha.
          </p>
          <button onClick={handleCloseModal}>Fechar</button>
        </ModalStyle>
      </Modal>
    </LoginPageModal>
  );
};
