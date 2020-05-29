import types from 'prop-types';
import React from 'react';
import {InputFieldClass} from '../styled/view/index';

export default function Input(props) {
  const {
    placeholder,
    onChange,
    onFocus,
    onBlur,
    value,
    name,
    error,
    type,
    id,
    ...rest
  } = props;

  // Render
  return (
    <div>
      <InputFieldClass
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        name={name}
        type={type}
        id={id}
        {...rest}
      />
    </div>
  );
}

// Type of props

Input.propTypes = {
  placeholder: types.string,
  onChange: types.func,
  onFocus: types.func,
  onBlur: types.func,
  value: types.oneOfType([types.string, types.number]),
  name: types.string,
  error: types.bool,
  type: types.string,
  id: types.string,
};

Input.defaultProps = {
  type: 'text',
};
