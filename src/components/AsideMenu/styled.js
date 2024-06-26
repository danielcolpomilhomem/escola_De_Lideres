import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 265px;
  padding: 50px 15px;
  background-color: #f8f9ff;
  height: 100vh;
  left: none !important;
  transition: ease 1s all;

  .button-reveal {
    display: none;
    border: none;
    transition: ease 300ms all;
  }

  @media (max-width: 500px) {
    position: absolute;
    z-index: 1000;
    width: 235px;

    transition: ease 1s all;

    .button-reveal {
      background-color: white;
      width: 50px;
      height: 50px;
      position: absolute;
      left: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 50%;
      border-radius: 50%;
      transform: translate(-50%, -50%);

      .hidden {
        opacity: 0%;
      }

      svg {
        transform: scale(2);
      }
    }
  }
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const UserName = styled.h1`
  font-size: 18px;
  margin: 10px 0;
`;

export const UserLevel = styled.h2`
  font-size: 13px;
  background-color: var(--color-active);
  padding: 2px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;

  @media (max-width: 500px) {
    font-size: 12px !important;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const MenuButton = styled(Link)`
  display: flex;
  z-index: 1000;
  align-items: center;
  padding: 10px 15px;
  margin: 5px 0;
  background-color: ${({ selected }) =>
    selected ? " var(--color-active)" : "transparent"};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: black;

  &:hover {
    background-color: var(--color-active);
  }
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
`;

export const ButtonTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

export const Logo = styled.div`
  margin-top: auto;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100px;
  ${({ backgroundUrl }) =>
    backgroundUrl && `background-image: url(${backgroundUrl});`}
`;
