import styled from "styled-components";

export const MainContainer = styled.div`
    width: 778px;
    height: auto;
      margin-top: 1rem;
      padding: 1rem;
background-color: var(--color-background-white-mode);
border-radius: 5px;
    .title-container{
        width: 100%;
        height: 55px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
              padding: 1rem;

        button{
            background-color: var(--color-background-active);
            height: 100%;
            padding: 0px 15px;
            border-radius: 5px;
            border: none;
            color: var(--color-background-white-mode)
        }
    }

    .days-container{
              padding: 1rem;

        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: center;
        border-bottom: 1px solid ;
        border-color: var(--color-text);
        h3{
            width: 20%;
        }
        .hours-container{
            display: flex;
            flex-direction: column;
            width: 80%;
                          gap: 1rem;

            .event{
                width: 100%;
                height: 60px;
                border-radius: 18px;
                display: flex;
                align-items: center;
                padding-left: 3rem;
                background-color: var(--color-text);
            }
        }
    }
`