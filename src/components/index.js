import React from 'react';
import {Route} from 'react-router-dom';
import { connect } from "react-redux";
import UserList from './userList/userList';
import Loader from 'react-loader-spinner'
import CreatePeople from './form/index';
import * as actions from "../redux/actions";
import { UserBlock, LoaderContainer } from '../view/styled/index';

const User = ({ userLoading }) => {
  return (
    <UserBlock>
      {userLoading ?
        <LoaderContainer>
          <Loader
            radius={1}
            type="Bars"
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
};

const mapStateToProps = (state) => ({
  userLoading: state.getUser.userLoading,

});

export default (
  connect(mapStateToProps, actions)(User)
);

