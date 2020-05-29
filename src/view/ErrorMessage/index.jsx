import React from 'react';
import styled from 'styled-components';

// Components

import {MdWarning} from 'react-icons/md';

import ReactIcon from '../ReactIcon';

export default function ErrorMessage({text}) {
  // Modifiers

  const ErrorMessageBox = styled.div`
    align-items: center;
    display: inline-flex;
    padding: 7px 10px;
    border-radius: $borderRadius;
  `;

  const Text = styled.div`
    color: inherit;
    text-size: 12px;
  `;

  const Icon = styled.div`
     margin-right: 5px;
  `;


  return (
    <ErrorMessageBox>
      <Icon>
        <ReactIcon size="lg" color="secondary">
          <MdWarning/>
        </ReactIcon>
      </Icon>
      <Text>
        {text}
      </Text>
    </ErrorMessageBox>
  );
}
