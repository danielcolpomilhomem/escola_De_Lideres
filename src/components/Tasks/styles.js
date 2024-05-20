import styled from "styled-components";

export const TasksContainer = styled.div`
  width: 260px;

  padding: 2rem;
  border-radius: 16px;
  display: flex;
  gap: 12px;

  flex-direction: column;
  background-color: var(--color-background-white-mode);

  @media (max-width: 500px) {
    width:100vw
  }

  h2 {
    font-weight: bold;
  }

  .taskContainer {
    width: 100%;
    height: 80px;

    display: flex;

    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    margin-bottom: 1rem;
    .titleTask {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      button {
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent;
        height: 40px;
      }
    }
    .tag {
      border: 1px solid;
      padding: 6px 7px;
      border-radius: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .tag.late {
      border-color: red;
      color: red;
    }

    .tag.onTime {
      border-color: blue;
      color: blue;
    }
  }
`;
