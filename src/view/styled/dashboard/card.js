import styled from 'styled-components';

export const CardWrapper = styled.div`
  box-sizing: border-box;
  border-radius: 20px;
  padding: 5px;
  background: #492f46;
  text-align: left;
  box-shadow: 1px 2px 6px 0px #4b3961;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 20px;
  display: flex;
  transition: all 1s ease-out;
  position: relative;
  cursor: pointer;

  &:hover {
    color: #b3ceef;
    box-shadow: white 2px 1px 42px;
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
  h5 {
   margin: 0;
  }
  p {
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

