import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  AiFillHome,
  AiFillSetting,
  AiOutlineRead,
  AiOutlineCalendar,
  AiOutlineFileText,
  AiOutlineOrderedList,
  AiOutlineLogout,
} from "react-icons/ai";
import { RxDoubleArrowLeft } from "react-icons/rx";

import { PiStudent } from "react-icons/pi";
import { PiBezierCurveBold } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import { AuthContext } from "../../Contexts/AuthContext";
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
  const location = useLocation();

  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const isButtonActive = (route) => {
    return location.pathname === route;
  };

  const handleLogout = () => {
    setAuth(false);
    navigate("/login");
  };

  const [propsAside, setPropsAside] = useState("0%");

  const handleClick = () => {
    setPropsAside(propsAside === "0%" ? "-60%" : "0%");
  };

  if (window.innerWidth <= 500) {
    useEffect(() => {
      console.log("teste");
      setPropsAside("-60%");
    }, [location.pathname]);
  }

  return (
    <AsideContainer
      style={{
        left: `${propsAside}`,
      }}
    >
      <button
        onClick={handleClick}
        className="button-reveal"
        style={{
          transform: propsAside === "-60%" ? "rotate(180deg)" : "rotate(0)",
        }}
      >
        <RxDoubleArrowLeft />
      </button>
      <UserProfile>
        <UserImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBuQj7NlL1CFHmLsio8yL7fCNAVCR5-ZX5JS7X0JoUqqvUQt9_TH0_JdVmi2bFk83IrE&usqp=CAU"
          alt="User"
        />
        <UserName>John Doe</UserName>
        <UserLevel>Nível 2</UserLevel>
      </UserProfile>
      <ButtonsContainer>
        <MenuButton to="/learning" selected={isButtonActive("/learning")}>
          <IconWrapper>
            <PiStudent size={24} />
          </IconWrapper>
          <ButtonTitle>Meu aprendizado</ButtonTitle>
        </MenuButton>
        <MenuButton to="/tracks" selected={isButtonActive("/tracks")}>
          <IconWrapper>
            <PiBezierCurveBold size={24} />
          </IconWrapper>
          <ButtonTitle>Trilhas</ButtonTitle>
        </MenuButton>
        <MenuButton>
          <IconWrapper>
            <AiOutlineCalendar size={24} />
          </IconWrapper>
          <ButtonTitle>Calendário</ButtonTitle>
        </MenuButton>
        <MenuButton>
          <IconWrapper>
            <AiOutlineFileText size={24} />
          </IconWrapper>
          <ButtonTitle>Anotações</ButtonTitle>
        </MenuButton>
        <MenuButton>
          <IconWrapper>
            <AiOutlineOrderedList size={24} />
          </IconWrapper>
          <ButtonTitle>Atividades</ButtonTitle>
        </MenuButton>
        <MenuButton onClick={handleLogout}>
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
