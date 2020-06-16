import React, { FunctionComponent, useState } from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import Modal from "../modal/Modal";
import CreatePeople from '../form/index';
import Select from "../select";

import * as actions from "../../redux/actions";
import { Wrapp } from "../../view/styled";

interface Interface {
  id: string,
  name: string,
  desc: string,
  surname: string,
  castErrors: Function,
  action: string,
  setIdUser: Function,
  idUser: number,
  isShowForm: boolean,
  setInitialValues: Function
}

type CardTypes = Interface;

const ManageCard: FunctionComponent<CardTypes> = ({
                                                    id, name, action, desc, surname, setIdUser, idUser, isShowForm, setInitialValues
                                            }) => {
  const [isModalDelete, setIsModalDelete] = useState(true);

  const user = idUser === +id;
  switch (action) {

  case 'GET_USER': {
    return (
      <Wrapp>
        <Card
          id={id}
          name={name}
          surname={surname}
          desc={desc}
          setIdPost={setIdUser}
        />
        <Select setIdPost={setIdUser} setIsModalDelete={setIsModalDelete} id={id} />
      </Wrapp>
    );
  }

  case 'DELETE_USER': {
    return (
      <div>
        {user &&
        <Modal
          isModalDelete={isModalDelete}
          setIsModalDelete={setIsModalDelete}
          id={id}
          userDelete={name}
        />
        }
      </div>)
  }

  case 'UPDATE_USER': {
    if (user === isShowForm) {
      setInitialValues({
        name,
        surname,
        desc,
      })
    }

    return (
      <div>
        {user && isShowForm && <CreatePeople currentUser={+id} />}
      </div>
    )}

    default: {
      return null;
    }
  }
}

interface StateInterface {
  cardReducer: {
    isShowModal: boolean,
    cardAction: string,
    idUser: number,
    isShowForm: boolean
  }
}

const mapStateToProps = (state: StateInterface) => ({
  isShowModal: state.cardReducer.isShowModal,
  action: state.cardReducer.cardAction,
  idUser: state.cardReducer.idUser,
  isShowForm: state.cardReducer.isShowForm,
})

export default (
  connect(mapStateToProps, actions)(ManageCard)
);

