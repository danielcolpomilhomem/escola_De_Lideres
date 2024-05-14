import styled from 'styled-components';

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 265px;
  padding: 50px 15px;
  background-color: #f8f9ff;
  height: 100vh;

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
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin: 5px 0;
  background-color: ${({ selected }) => (selected ? ' var(--color-active)' : 'transparent')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-active);
  }
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
`;

export const ButtonTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
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
  ${({ backgroundUrl }) => backgroundUrl && `background-image: url(${backgroundUrl});`}
`;
