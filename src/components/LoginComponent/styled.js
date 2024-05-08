import styled from 'styled-components';

const LoginModal = styled.div`
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

  h2{
    font-weight: bold;
    margin-bottom: 5%;
  }
  form{
    width: 100%;
    height: 50% ;
    display: flex;
    gap: 5%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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

export default LoginModal;