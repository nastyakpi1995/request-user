import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import UserList from './userList/UserList';
import CreatePeople from './form';
import * as actions from "../redux/actions";
import { UserBlock, LoaderContainer } from '../view/styled';

interface OwnProps {
  userLoading: boolean;
}

type PropTypes = OwnProps;

const User: FunctionComponent<PropTypes> = ({ userLoading }) => (
  <UserBlock>
    {userLoading ?
      <LoaderContainer>
        <Loader
          type="Circles"
          color="#00BFFF"
          height={500}
          width={100}
        />
      </LoaderContainer>
      :
      <>
        <UserList/>
        <Route path="/createPeople">
          <CreatePeople/>
        </Route>
      </>
    }
  </UserBlock>
);

interface UserInterface {
  getUser: {
    userLoading: boolean,
  }
}

const mapStateToProps = (state: UserInterface) => ({
  userLoading: state.getUser.userLoading,
});

export default (
  connect(mapStateToProps, actions)(User)
);

