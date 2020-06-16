import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

import { CardProps, InterfaceCard } from '../../models';

import {
  CardBody, CardWrapper
} from '../../view/styled';

type CardTypes = CardProps;

const Card: FunctionComponent<CardTypes> = ({ name, desc, surname
}) => (
  <CardWrapper>
    <CardBody>
      <h1>{name}</h1>
      <h5>
        {surname}
      </h5>
      <p>{desc}</p>
    </CardBody>
  </CardWrapper>
);

const mapStateToProps = (state: InterfaceCard) => ({
    userData: state.getUser.userData,
});

export default (
  connect(mapStateToProps, actions)(Card)
);
