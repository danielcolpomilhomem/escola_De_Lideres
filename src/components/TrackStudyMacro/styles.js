import styled from "styled-components";

const MainContainer = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  height: 256px;
  gap: 1rem;
  justify-content: center;
  height: auto;
`;

const StudyComponent = styled.div`
  width: 253px;
  height: 253px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  background-color: white;
  padding: 10px;
  border-radius: 5px;

  h4{
    color: var(--color-text-white);
  }

  .progress-bar {
    width: 100%;
    height: 1px;
    background-color: #ccc;
    border-radius: 5px;
    position: relative;
  }


  .progress-indicator {
    position: absolute;
    top: -3px; /* Ajuste para centralizar verticalmente */
    left: 0;
    height: 8px;
    width: ${props => props.progress}%;
    background-color: green;
    border-radius: 5px;
  }
`;


export { MainContainer, StudyComponent };
