import styled from "styled-components";
import borderDown from "../../../src/assets/borderDown.svg"

export const LoginScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
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
    @media screen and (max-width: 500px) {

        width: 100vw;
        height: 100vh;
        background-position: bottom;

        .background-logo {
            position: absolute;
            width: 50vw;
            height: 50vh;
            background-size: contain;
            top: 33%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;
