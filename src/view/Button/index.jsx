import types from 'prop-types';
import React from 'react';
import {styledText, CommonButton, styledButton} from '../styled/index';

export default function Button({
   disabled, text, onClick, position = 'relative', color, type,
   bottom, top, margin, marginText, width = '30%', border, load,
   height, bgColor, medium, children,
 }) {
// Style
  const boxStyle = {
    color,
    height,
    width,
    position,
    bgColor,
    border,
    top,
    bottom,
    margin,
  };
  // Render
  const ButtonStyle = styledButton(boxStyle);
  const Text = styledText(medium, marginText);

  return (
    <ButtonStyle
      disabled={disabled}
      onClick={load || disabled ? null : onClick}
      type={type}
    >
      {load ? (
        <div>load</div>
      ) : (
        <CommonButton>
          <Text>
            {text || children}
          </Text>
        </CommonButton>
      )}
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

// Type of props

Button.propTypes = {
  text: types.string,
  disabled: types.bool,
  onClick: types.func,
  border: types.string,
  color: types.string,
  height: types.string,
  width: types.string,
  type: types.oneOf(['button', 'submit']),
};
