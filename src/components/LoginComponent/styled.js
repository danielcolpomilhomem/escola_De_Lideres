import styled from 'styled-components';

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
    h2{
      font-weight: bold;
      margin-bottom: 5%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 85%;
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
    width: 100%;
    height: 100%;
    display: flex;
    gap: 1%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h4{
      color: var(--color-text-in-primary);
      text-align: center;
      width: 85%;
      text-align: start;
      margin-bottom: 1%;
    }

    .check-container{
      display: flex;
      flex-direction: row;
      width: 85%;
      gap: 5%;



      h4{
        color: var(--color-text-in-primary);
      }
    }

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



`

