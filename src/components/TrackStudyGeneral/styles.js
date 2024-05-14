import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
      background-color: var(--color-background-active);

  width: 253px;
  height: 253px;
  border-radius: 8px;
  margin-left: 1rem;

  .title{
    width: 100%;
        margin-left: 4rem;

    color: var(--color-background-white-mode);
  }
  p{
        color: var(--color-background-white-mode);

  }
`;

export const InnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  flex-direction: column; 
`;

export const MiddleCircle = styled.div`
  background-color: transparent;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
    z-index: 500;
  h2{
    font-size: 34px;
    display: flex;
    color: var(--color-background-white-mode);
    align-items: center;
    justify-content: center;
    width: 85%;
    height: 85%;
    background-color: var(--color-background-active);
    border-radius: 50%;
  }
`;

export const ProgressSpinner = styled.div`
  background: conic-gradient(${props => props.gradient});
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  z-index: 499;
`;
