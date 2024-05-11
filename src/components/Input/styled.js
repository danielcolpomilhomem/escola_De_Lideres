import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 85%;
  height: 10rem;
  position: relative; 
  
  span{
    font-size:15px;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
    height: 4.5rem;
    margin-bottom: 15px;
  }
`;

const Label = styled.label`
  font-weight: normal;
  margin-bottom: 5px;
  color: var(--color-text-in-primary);

  @media screen and (max-width: 500px) {
    font-size:18px;
  }
`;

const Input = styled.input`
  padding: 6px;
  border-radius: 3px;
  border: 1px solid var(--color-border);
  height: 5.2rem;
  @media screen and (max-width: 500px) {
    font-size:18px;

  }
`;

const IconPass = styled.div`
  width: 5rem;
  height: 5rem;
  position: absolute;
  bottom: 25%; 
  top: 25%;
  right: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  justify-content: center;


  @media screen and (max-width: 500px) {
    width: 2rem;
    height: 4rem;
  }

  
`;

export { InputContainer as default, Label, Input, IconPass };