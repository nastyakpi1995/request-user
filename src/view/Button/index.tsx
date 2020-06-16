import React, { FunctionComponent } from 'react';
import { styledText, CommonButton, styledButton } from '../styled';

interface ButtonProps {
  text?: string,
  disabled?: boolean,
  onClick?: Function,
  border?: string,
  color?: string,
  height?: string,
  width?: string,
  type: string,
  marginText?: string,
  bgColor?: string,
  margin?: string,
}

type ButtonType = ButtonProps;

const ButtonComponent: FunctionComponent<ButtonType> = ({
    disabled, text, onClick, color, type,
     margin, marginText, width = '30%', border,
    height, bgColor, children,
 }) => {
  const boxStyle = {
    color,
    height,
    width,
    bgColor,
    border,
    margin,
  };
  const ButtonStyle = styledButton(boxStyle);
  const Text = styledText(marginText);

  return (
    <ButtonStyle
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      <CommonButton>
        <Text>
          {text || children}
        </Text>
      </CommonButton>
    </ButtonStyle>
  );
}

export default ButtonComponent;
