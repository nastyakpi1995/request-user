import React, { FunctionComponent } from 'react';
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

export default ReactIcon;
