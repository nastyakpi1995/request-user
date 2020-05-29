import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {Button} from '../../view';

import {Confirm, Body, ContainerButton} from '../../view/styled/index';

const Modal = ({
                 isDelete, userDelete, setIsDelete, handleClickDelete,
               }) => (
  <Confirm
    style={{
      transform: isDelete ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: isDelete ? '1' : '0',
    }}
  >
    <Body>
      <h1>
        realy want delete
        {' '}
        {userDelete}
        {' ?'}
      </h1>
      <ContainerButton>
        <Button
          onClick={() => setIsDelete(false)}
          width="50%"
          height="50px"
          margin="0 10px 0 0"
        >
          Cansel
        </Button>
        <Button
          onClick={handleClickDelete}
          width="50%"
          height="50px"
        >
          delete
        </Button>
      </ContainerButton>
    </Body>

  </Confirm>

);

const mapStateToProps = (state) => ({
  userData: state.getUser.userData,
  startRange: state.getUser.startRange,
  endPage: state.getUser.endPage,
});

export default (
  connect(mapStateToProps, actions)(Modal)
);
