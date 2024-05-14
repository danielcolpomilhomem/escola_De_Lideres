import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 300px;
    align-items: center;
    justify-content: start;

    gap: 6rem;


    .contentImage{
        width: 500px;
            height: 300px;

        border-radius: 15px;

        background-color: var(--color-background-active);
    }
    p{
        width: 40%;
        height: 100%;
        font-size: 16px;
    }
`

export default MainContainer;
