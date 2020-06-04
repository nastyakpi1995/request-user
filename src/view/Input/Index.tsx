import React, { FunctionComponent, ChangeEvent  } from 'react';
import types from 'prop-types';
import { InputFieldClass } from '../styled/view';

interface InputProp {
  placeholder?: string;
  value?: string;
  onChange?: {
    (e: ChangeEvent<any>): void;
  };
  name?: string,
}

type InputTypes = InputProp;
 const Input: FunctionComponent<InputTypes>  = ({
    placeholder,
    onChange,
    value,
    name,
  }) => (
      <InputFieldClass
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        type='text'
      />
  )

Input.propTypes = {
  placeholder: types.string,
  onChange: types.func,
  name: types.string,
};

export default Input;
