import React, { useState } from "react";
import { LoginPageModal, ModalStyle, LoginButton } from "./styled";
import { InputComponent } from "../../../components/Input/InputComponent";
import { AiOutlineLeft, AiOutlineCheck } from "react-icons/ai";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export const RecoveryAcessComponent = ({ onReturnClick }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    user: "",
    birth: "",
    phone: "",
    email: "",
  });

  const handleReturn = () => {
    onReturnClick("LoginComponent");
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.user === "admin" &&
      formData.birth === "2001-01-01" &&
      formData.phone === "911111111" &&
      formData.email === "admin@gmail.com"
    ) {
      setOpen(true);
    } else {
      alert("Dados inválidos");
    }
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <LoginPageModal width="100%" height="100%" top="50%">
      <form onSubmit={handleSubmit}>
        <h2>
          <button type="button" onClick={handleReturn}>
            <AiOutlineLeft />
          </button>
          Recuperar Acesso
        </h2>
        <h4>
          Para recuperar seu acesso, preencha os campos abaixo com seus dados e
          confirme. Vamos verificar se os dados estão corretos e entraremos em
          contato.
        </h4>
        <InputComponent
          label={"Usuário"}
          placeholder={"nome@exemplo.com"}
          name="usuario"
          value={formData.usuario}
          onChange={(value) => handleInputChange("user", value)}
        />

        <InputComponent
          label={"Data de nascimento"}
          placeholder={"Digite aqui"}
          type={"date"}
          name="nascimento"
          value={formData.nascimento}
          onChange={(value) => handleInputChange("birth", value)}
        />

        <InputComponent
          label={"Telefone para contato"}
          placeholder={"Digite aqui"}
          type={"tel"}
          name="telefone"
          value={formData.telefone}
          onChange={(value) => handleInputChange("phone", value)}
        />

        <InputComponent
          label={"Email para Contato"}
          placeholder={"Digite aqui"}
          type={"email"}
          name="email"
          value={formData.email}
          onChange={(value) => handleInputChange("email", value)}
        />
        <LoginButton
          backgroundColor="#2849d9"
          textColor="white"
          text="Enviar"
          type="submit"
        >
          Enviar
        </LoginButton>
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
            <AiOutlineCheck /> Solicitação enviada
          </h2>
          <p>
            Sua solicitação foi enviada! Vamos analisar os dados e confirmar sua
            identidade. Caso os dados estejam corretos e se encontrem em nosso
            banco de dados, entraremos em contato para restabelecer seu acesso.
          </p>
          <button onClick={handleReturn}>Fechar</button>
        </ModalStyle>
      </Modal>
    </LoginPageModal>
  );
};
