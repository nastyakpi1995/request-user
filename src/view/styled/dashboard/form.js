import styled from 'styled-components';

export const FormButton = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  left: 30%;
  top: 12%;
  display: block;
  justify-content: end;
  position: fixed;
  z-index: 500;
  padding: 0 40px;
  background-color: #ebe9e7;
  width: 564px;
  height: 616px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-sizing: border-box;
  transition: all 0.3s ease-out;

  h1 {
    color: black;
  }

  @media (max-width: 801px) {
    left: 0;
    top: 0;
    width: fit-content;
  }

  @media (max-width: 1001px) {
    left: calc(50% - 205px);
    top: calc(50% - 315px);
    width: 416px;
  }

  @media (min-width: 600px) {
    .Modal {
      width: 500px;
      left: calc(50% - 250px);
    }
  }
`;
