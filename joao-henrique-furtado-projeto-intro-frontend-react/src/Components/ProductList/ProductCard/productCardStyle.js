import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;

export const ProductCardItem = styled.div`
 
  border-radius: 5px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  width: 90%;

  img {
    margin-bottom: 5px;
    width: 25%;
  }

  h2 {
    font-size: 16px;
    margin: 5px 0;
    text-align: left;
  }

  p {
    font-size: 14px;
    margin: 5px 0;
    text-align: center;
  }

  button {
    background-color: #2ecc71;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;
    padding: 10px;
  }
`;

export const ProductCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  h2 {
    font-size: 20px;
    margin: 0;
    text-align: left;
  }

  button {
    background-color: azure;
    border: none;
    border-radius: 5px;
    
    cursor: pointer;
    font-size: 14px;
    padding: 10px;
  }
`;
