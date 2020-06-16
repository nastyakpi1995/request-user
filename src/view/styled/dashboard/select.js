import styled from "styled-components";

export const DropdownList = styled.div`
  z-index: 9999;
  background: white;
  border: 1px solid #676f75;
  height: 50px;
  padding: 10px;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  text-align: left;
  position: absolute;
  width: 80px !important;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 10px;
  right: 40px;
  width: 30px !important;
  margin: 0;
  cursor: pointer;
  button {
    background: #ea2323;
    border: none;
    border-radius: 5px;
    height: 30px;
    width: 30px;
  }
`;
export const ButtonMain = styled.button`
  cursor: pointer;
`;

export const Button = styled.div`
  color: black;
    &:hover {
      color: gray;
    }
`;
