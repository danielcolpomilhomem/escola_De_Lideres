import styled from "styled-components";
import borderDown from "../../../src/assets/borderDown.svg"

export const LoginScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    max-width: 1920px;
    height: 100vh;
    max-height: 1080px;
    background-color: #f6f8f9;
    background-image: url(${borderDown});
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;

    .background-logo {
    width: 350px;
    height: 350px;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: 16%;
    top: 15%;
}
`;
