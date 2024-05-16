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

  .bottom-div {
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
      padding: 1.2rem;
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

        .main-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          text-align: start;
          gap: 10px;
          .text-span {
            width: 100%;
            text-align: start;
            margin-bottom: 12px;
            margin-left: 35px;
          }
        }
        .actvity {
          width: 100%;
          height: 50px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          button {
            background-color: transparent;
            border: none;
            cursor: pointer;

            svg {
              transition: transform 0.3s ease-in-out;
              ${(props) =>
                props.expanded &&
                css`
                  transform: rotate(180deg);
                `}
            }
          }
        }
      }
    }
  }
  .bottom-div-right {
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
        .suport {
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
