import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: #4b4b65;
  }
 `;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const UserBlock = styled.div`
  background: #d6cfd6;
  max-width: 778px;
  border-radius: 20px;
  margin: 20px auto;


  @media (max-width: 1200px) {
    max-width: 590px;
  }

  @media (max-width: 992px)
    max-width: 100%;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  border-radius: 10%;
  color: white;
`;

export const AddPerson = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;
