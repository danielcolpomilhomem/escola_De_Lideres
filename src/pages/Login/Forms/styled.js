import styled, { css } from 'styled-components';

export const LoginPageModal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 33%;
  height: 95%;
  position: absolute;
  right: 1.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  
  form{

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
      font-weight: bold;
      margin-bottom: 5%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 85%;

      @media screen and (max-width: 500px) {
        width: 100%;

      }

      button{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 5% ;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }


    h4{
      color: var(--color-text-in-primary);
      text-align: center;
      width: 85%;
      text-align: start;
      margin-bottom: 1%;
      @media screen and (max-width: 500px) {
        width: 90%;
        margin-bottom: 5%;
      }
    }

    .check-container{
      display: flex;
      flex-direction: row;
      width: 85%;
      gap: 5%;

      margin-bottom: 5%;

      h4{
        color: var(--color-text-in-primary);
      }
    }

      @media screen and (max-width: 500px) {
        gap:1%
      }
  }

  @media screen and (max-width: 500px) {
    width: 90%;
    height: 58%;
    top: 60%; 
    width:${props => props.width};
    height:${props => props.height};
    top:${props => props.top};
    right: 50%;
    transform: translate(50%, -50%);
    position: absolute;
    
  }
    
`;

export const LoginButton = styled.button`
  width: 85%;
  margin-bottom: 2%;
  height: 5.5rem;
  background-color: blue;
  color: ${props => props.textColor || 'black'};
  background-color: ${props => props.backgroundColor || 'white'};
  border-color: ${props => props.backgroundColor || 'white'};
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  cursor: pointer;


  @media screen and (max-width: 500px) {
    font-size: 15px;
    height: 3.5rem;
    width: 90%;

  }

`;



export const ModalStyle = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap:3%;
  }
  p{
    width: 90%;
  }
  
  button{
    border: none;
    background-color: #2849d9 ;
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 40px;
    align-self: flex-end;
  }

  @media screen and (max-width: 500px) {
    width: 90%; 
    height: auto; 
  }

`

