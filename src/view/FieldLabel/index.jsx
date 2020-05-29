import React from 'react';
import types from 'prop-types';
import {Title, Text, Error} from '../styled/index';

export default function FieldLabel({
                                     text, children, error,
                                   }) {
  return (
    <div>
      <Title>
        <Text>
          {text}
        </Text>
      </Title>
      {children}
      {error && <Error>{error}</Error>}
    </div>
  );
}

FieldLabel.propTypes = {
  text: types.string,
};

FieldLabel.defaultProps = {
  text: '',
};
