import React, { FunctionComponent } from 'react';
import types from 'prop-types';
import { ReactIconClass } from '../styled/view';

interface ReactIconProps {
  children?: any,
  color: string,
  size: string
}

type ReactIconTypes = ReactIconProps;

const ReactIcon: FunctionComponent<ReactIconTypes> = ({
   children,
}) => (
    <ReactIconClass>
      {children}
    </ReactIconClass>
);

// Default value for props

ReactIcon.propTypes = {
  children: types.node,
};

ReactIcon.defaultProps = {
  children: 'Your text',
};

export default ReactIcon;
