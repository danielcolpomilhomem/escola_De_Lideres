import React, { useState } from "react";
import { LoginPageModal, ModalStyle } from "./styled";
import { InputComponent } from "../Input/InputComponent";
import { ButtonLogin } from "../Button/ButtonLogin";
import { AiOutlineLeft, AiOutlineCheck } from "react-icons/ai";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export const RecoveryAcessComponent = ({ onReturnClick }) => {
  const [open, setOpen] = useState(false);

  const handleReturn = () => {
    onReturnClick("LoginComponent");
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <LoginPageModal width="100%" height="100%" top="50%">
      <form action="">
        <h2>
          <button onClick={handleReturn}>
            <AiOutlineLeft />
          </button>
          Recuperar Acesso
        </h2>
        <h4>
          Para recuperar seu acesso, preencha os campos abaixo com seus dados e
          confirme. Vamos verificar se os dados estão corretos e entraremos em
          contato.
        </h4>
        <InputComponent label={"Usuário"} placeholder={"nome@exemplo.com"} />

        <InputComponent
          label={"Data de nascimento"}
          placeholder={"Digite aqui"}
          type={"date"}
        />

        <InputComponent
          label={"Telefone para contato"}
          placeholder={"Digite aqui"}
          type={"tel"}
        />

        <InputComponent
          label={"Email para Contato"}
          placeholder={"Digite aqui"}
          type={"email"}
        />

        <ButtonLogin
          backgroundColor="#2849d9"
          textColor="white"
          text="Enviar"
          onClick={handleOpenModal}
        />
      </form>

      <Modal
        onClose={handleCloseModal}
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
            Sua solicitação foi enviada! Vamos analisar os dados e confirmar sua
            identidade. Caso os dados estejam corretos e se encontrem em nosso
            banco de dados, entraremos em contato para restabelecer seu acesso.
          </p>
          <button onClick={handleCloseModal}>Fechar</button>
        </ModalStyle>
      </Modal>
    </LoginPageModal>
  );
};
