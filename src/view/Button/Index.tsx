import React, { FunctionComponent } from 'react';
import types from 'prop-types';
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

const Button: FunctionComponent<ButtonType> = ({
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

// Default value for props

Button.defaultProps = {
  color: 'third',
  type: 'button',
  height: 'md',
  width: 'sm',
};


Button.propTypes = {
  text: types.string,
  disabled: types.bool,
  onClick: types.func,
  border: types.string,
  color: types.string,
  height: types.string,
  width: types.string,
};

export default Button;
