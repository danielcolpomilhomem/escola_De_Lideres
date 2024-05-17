import styled from "styled-components";

export default Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;


  display: flex;
  flex-direction: row;
  background-color: var(--color-background-dash);

  .content-side-dash {
    width: 100%;
    height: 100vh;
    display: grid;
    padding: 1%;
    gap: 2rem;
    grid-template-columns: 80% 18%;
    align-items: start;
    justify-content: start;
    overflow-y: auto;
    overflow-x: hidden;
    justify-items: end;
  }

  @media (max-width: 1590px) {
    .content-side-dash {
      grid-template-columns: auto auto;
      justify-content: space-evenly;
    }
  }
 @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
`;
