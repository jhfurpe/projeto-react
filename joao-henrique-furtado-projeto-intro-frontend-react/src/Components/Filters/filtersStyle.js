import styled from 'styled-components';

export const FormWrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 20 px;
  bottom: 20px;
  width: 240px;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: flex-start;
`;

export const Label = styled.label`
  margin: 10px 0;
  font-weight: bold;
`;

export const Input = styled.input`
  margin-bottom: 10px;
`;