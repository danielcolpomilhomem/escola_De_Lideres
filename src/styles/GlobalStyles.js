import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-text: #b2b5b7;
    --color-text-white: #6a6d6f;
    --color-border: #6a6d6f;
    --color-text-in-primary: #000000;
    --color-background-white-mode: #FFFFFF 

    font-size: 60%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    position: relative;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background-color:  var(--color-background-white-mode) ;
    color: var(--color-text-in-primary);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
    overflow-y: overlay;

    transition: ease all 1s;
  }

  body, input, button, textarea {
  font-family: 'Gantari', Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }
  h2{
    size: 26px;
  }
  p{
    font-size: 18px;
  }
     @media (max-width: 500px) {

      h2{
        font-size: 28px !important;
      }
      h4{
        font-size: 18px !important;

      }
      p{
        font-size: 16px;
      }


    }
a{
  text-decoration: none;
  color: white;
}
  button {
    cursor: pointer;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.3);
    margin: 1rem;
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #fff;
  }

  
`;