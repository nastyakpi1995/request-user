import React from 'react';
import types from 'prop-types';
import styled from 'styled-components';

// Styles


export default function ReactIcon({
                                    children,
                                  }) {
  const ReactIconClass = styled.div`
    color: red;
  `;

  return (
    <ReactIconClass>
      {children}
    </ReactIconClass>
  );
}

// Type of props

ReactIcon.propTypes = {
  children: types.node,
};

// Default value for props

ReactIcon.defaultProps = {
  children: 'Your text',
};
