import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 85%;
  height: 7.5rem;
  position: relative; 
  margin-top: 1%;
`;

const Label = styled.label`
  font-weight: normal;
  margin-bottom: 5px;
  color: var(--color-text-in-primary);
`;

const Input = styled.input`
  padding: 6px;
  border-radius: 3px;
  border: 1px solid var(--color-border);
  height: 95%;
`;

const IconPass = styled.div`
  width: 5rem;
  height: 5rem;
  position: absolute;
  bottom: 0; 
  right: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  justify-content: center;
`;

export { InputContainer as default, Label, Input, IconPass };