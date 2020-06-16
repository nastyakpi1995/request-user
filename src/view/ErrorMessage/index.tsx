import React, { FunctionComponent } from 'react';

// Components
import { MdWarning } from 'react-icons/md';
import ReactIcon from '../ReactIcon';
import { ErrorMessageBox, TextError, IconError } from '../styled';

interface ErrorMessageProps {
  text: string,
}

type ErrorMessageType = ErrorMessageProps;

const ErrorMessage:FunctionComponent<ErrorMessageType> = ({ text }) => (
    <ErrorMessageBox>
      <IconError>
        <ReactIcon color="secondary" size="lg" >
          <MdWarning />
        </ReactIcon>
      </IconError>
      <TextError>
        {text}
      </TextError>
    </ErrorMessageBox>
);

export default ErrorMessage;
