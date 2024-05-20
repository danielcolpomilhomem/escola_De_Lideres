import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: start;

  gap: 6rem;

  @media (max-width: 500px) {
    height: auto;
    flex-direction: column;
  }

  .contentImage {
    width: 500px;
    height: 300px;

    border-radius: 15px;

    background-color: var(--color-background-active);

    @media (max-width: 500px) {
      width: 100vw;
    }
  }
  p {
    width: 40%;
    height: 100%;
    font-size: 16px;

    @media (max-width: 500px) {
      width: auto;
      text-align: center;
    }
  }
`;

export default MainContainer;
