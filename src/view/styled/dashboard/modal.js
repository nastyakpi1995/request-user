import styled from 'styled-components';

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 30px;
`;

export const Wrapp = styled.div`
  position: relative;
`;

export const Confirm = styled.div`
  left: 30%;
  top: 12%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 500;
  padding: 0 40px;
  background-color: #ebe9e7;
  height: 616px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  max-width: 590px;
  height: ${props => props.theme === 3 ? '400px' : '650px'};

  h1 {
    color: black;
    display: flex;
    justify-content: start;
    overflow: auto;
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

export const BodyModal = styled.div`

`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
