import styled from 'styled-components';

export const styledText = (marginText) => {
  const Text = styled.p`
    color: inherit;
    text-transform: uppercase;
    font-family: Avenir Next;
    font-weight: 600;
    font-size: 12px;
    margin: ${marginText};
  `;

  return Text;
};

export const CommonButton = styled.div`
    align-items: center;
    display: inline-flex;
`;

export const styledButton = ({
                               color, height, width, position, bgColor, border, top, bottom, margin,
                             }) => {
  const ButtonStyle = styled.button`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.1;
  color: ${color};
  height: ${height};
  width: ${width};
  position: ${position};
  background: ${bgColor};
  border: ${border};
  box-shadow: 1px 18px 12px 1px #5a565f;
  right: 10px;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  text-align: -webkit-right;
  top: ${top};
  bottom: ${bottom};
  margin: ${margin};
  transition: 0.5s all;
  outline: none;
  cursor: pointer;

   &[disabled] {
    background-color: #423f3f;
    transition: 0.3s all;
  }

  &:hover {
    color: gray;
  }
`;

  return ButtonStyle;
};
