import styled from 'styled-components';

export const CardWrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
  text-align: left;
  box-shadow: 1px 2px 6px 0px #4b3961;
  height: 200px;
  align-items: center;
  margin-bottom: 20px;
  display: flex;
  transition: 0.5s all;
  position: relative;
  cursor: pointer;

  &:hover {
    background: #1c3c58;
    color: #b3ceef;
  }
`;

export const CardBody = styled.div`
  position: relative;
  width: 70%;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 12px;
  box-sizing: border-box;
  h1 {
    font-family: Avenir Next;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    margin: 0;
  }
`;

export const TitleButton = styled.span`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;

  img {
    margin-right: 10px;
  }
`;

