import styled from "styled-components";

export default Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 1920px;
  height: auto;
  max-height: 1080px;

  display: flex;
  flex-direction: row;
  background-color: var(--color-background-dash);

  .content-side-dash {
    width: 100%;
    height: 100vh;
    display: grid;
    padding: 1%;
    grid-template-columns: 70% 30%;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
  }
  .content-side-tracks {
    width: 100%;
    height: 100vh;
    display: grid;
    padding: 1%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    overflow-y: auto;
    gap: 3rem;
    .title-container {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      h2 {
        font-weight: bold;
      }
      p {
        color: var(--color-text);
      }
    }
  }

  .bottom-div{
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .bottom-div-left {
    width: 75%;
    height: 100%;
    display: flex;
  flex-direction: column;

    .ativity-projects {
        padding:1.2rem;
      display: flex;
      flex-direction: column;
      align-items: start;
        width: 100%;

        margin-bottom: 2rem;
      .title {
        width: 100%;
        height: 35px;
        display: flex;
        font-weight: bold;
      }
      .ativity-container {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        width: 100%;
        background-color: var(--color-background-white-mode);
        border-radius: 15px;
        padding: 0rem 1.5rem;
        
        .actvity{
            width: 100%;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: start;
        }
      }
    }
  }
  .bottom-div-right{
    width: 25%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: center;

    .suport-material {
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        margin: 1.2rem;
      .title {
        width: 100%;
        height: 35px;
        display: flex;
        font-weight: bold;
      }
      .suport-container {
        
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        width: 100%;
        border-radius: 15px;
        padding: 0rem 1.5rem;
        background-color: var(--color-background-white-mode);
        .suport{
            width: 100%;
            height: 50px;
            display: flex;
            gap: 15px;
            flex-direction: row;
            align-items: center;
            justify-content: start;
        }
      }
    }
  }
`;
