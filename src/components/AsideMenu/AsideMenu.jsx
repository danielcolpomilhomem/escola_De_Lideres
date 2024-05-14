import React from "react";
import {
  AiFillHome,
  AiFillSetting,
  AiOutlineRead,
  AiOutlineCalendar,
  AiOutlineFileText,
  AiOutlineOrderedList,
  AiOutlineLogout,
} from "react-icons/ai";
import { PiStudent } from "react-icons/pi";
import { PiBezierCurveBold } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";

import LogoEscola from "../../assets/LogoEscola.svg";

import {
  AsideContainer,
  UserProfile,
  UserImage,
  UserName,
  UserLevel,
  ButtonsContainer,
  MenuButton,
  IconWrapper,
  ButtonTitle,
  Logo,
} from "./styled";

const AsideMenu = () => {
  const [selectedButton, setSelectedButton] = React.useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <AsideContainer>
      <UserProfile>
        <UserImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBuQj7NlL1CFHmLsio8yL7fCNAVCR5-ZX5JS7X0JoUqqvUQt9_TH0_JdVmi2bFk83IrE&usqp=CAU"
          alt="User"
        />
        <UserName>John Doe</UserName>
        <UserLevel>Nível 2</UserLevel>
      </UserProfile>
      <ButtonsContainer>
        <MenuButton
          selected={selectedButton === "meuAprendizado"}
          onClick={() => handleButtonClick("meuAprendizado")}
        >
          <IconWrapper>
            <PiStudent size={24} />
          </IconWrapper>
          <ButtonTitle>Meu aprendizado</ButtonTitle>
        </MenuButton>
        <MenuButton
          selected={selectedButton === "trilhas"}
          onClick={() => handleButtonClick("trilhas")}
        >
          <IconWrapper>
            <PiBezierCurveBold size={24} />
          </IconWrapper>
          <ButtonTitle>Trilhas</ButtonTitle>
        </MenuButton>
        <MenuButton
          selected={selectedButton === "calendario"}
          onClick={() => handleButtonClick("calendario")}
        >
          <IconWrapper>
            <AiOutlineCalendar size={24} />
          </IconWrapper>
          <ButtonTitle>Calendário</ButtonTitle>
        </MenuButton>
        <MenuButton
          selected={selectedButton === "anotacoes"}
          onClick={() => handleButtonClick("anotacoes")}
        >
          <IconWrapper>
            <AiOutlineFileText size={24} />
          </IconWrapper>
          <ButtonTitle>Anotações</ButtonTitle>
        </MenuButton>
        <MenuButton
          selected={selectedButton === "atividades"}
          onClick={() => handleButtonClick("atividades")}
        >
          <IconWrapper>
            <AiOutlineOrderedList size={24} />
          </IconWrapper>
          <ButtonTitle>Atividades</ButtonTitle>
        </MenuButton>
        <MenuButton
          selected={selectedButton === "sair"}
          onClick={() => handleButtonClick("sair")}
        >
          <IconWrapper>
            <IoIosLogOut size={24} />
          </IconWrapper>
          <ButtonTitle>Sair</ButtonTitle>
        </MenuButton>
      </ButtonsContainer>
      <Logo backgroundUrl={LogoEscola} />
    </AsideContainer>
  );
};

export default AsideMenu;
