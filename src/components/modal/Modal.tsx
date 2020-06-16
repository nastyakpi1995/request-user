import React, { FunctionComponent } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import { ButtonComponent } from '../../view';

import { Confirm, BodyModal, ContainerButton, Backdrop } from '../../view/styled';
import { ModalProps } from '../../models';

const Modal: FunctionComponent<any> = ({ userDelete, setIsModalDelete, requestUserDelete, perPage, setAction, id, isModalDelete
 }) => {

  const handleClickDelete = () => {
    setAction('GET_USER');
    requestUserDelete(id);
  }
  const handlerCancel = () => {
    setIsModalDelete(false);
    setAction('GET_USER');
  }
  return (
    <>
      {isModalDelete && <Backdrop onClick={handlerCancel}/>}
    <Confirm
      theme={perPage}
    >
      <BodyModal>
        <h1>
          realy want delete
          {' '}
          {userDelete && userDelete}
          {' ?'}
        </h1>
        <ContainerButton>
          <ButtonComponent
            type="button"
            onClick={handlerCancel}
            width="50%"
            height="50px"
            margin="0 10px 0 0"
          >
            Cancel
          </ButtonComponent>
          <ButtonComponent
            type="button"
            onClick={handleClickDelete}
            width="50%"
            height="50px"
          >
            Delete
          </ButtonComponent>
        </ContainerButton>
      </BodyModal>
    </Confirm>
   </>
  );
}

const mapStateToProps = (state: ModalProps) => ({
  userData: state.getUser.userData,
  startRange: state.getUser.startRange,
  endPage: state.getUser.endPage,
  perPage: state.getUser.perPage
});

export default (
  connect(mapStateToProps, actions)(Modal)
);
