import styled from "styled-components";


export default Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    max-width: 1920px;
    height: 100vh;
    max-height: 1080px;

    display: flex;
    flex-direction: row;
    background-color: var(--color-background-dash);

.content-side {
    width: 100%;
    height: 100vh;
    display: grid;
    padding: 1%;
    grid-template-columns: 70% 30%;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
}
`
