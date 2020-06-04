import React, { FunctionComponent } from 'react';
import { Title, Text, Error } from '../styled';

interface FieldLabelProps {
  text: string,
  children?: any[],
  error?: string,
}

type FieldLabelType = FieldLabelProps;

 const FieldLabel:FunctionComponent<FieldLabelType> = ({
      text, children, error,
 }) => (
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

FieldLabel.defaultProps = {
  text: '',
};

export default FieldLabel;
