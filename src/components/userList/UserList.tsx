import React, { useEffect, useState, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';
import * as actions from '../../redux/actions';
import Modal from '../modal/Modal';
import { Button } from '../../view/Index';
import { Container, AddPerson, ListUser } from '../../view/styled';
import { UserListProps, UserListInterface } from '../models';
import Switch from '../../view/Switch';

type UserListTypes = UserListProps;

const UserList: FunctionComponent<UserListTypes>  = ({
   userData, requestGetUser, startRange, endPage, requestUserDelete, setCurrentUser, castErrors, perPage
}) => {
  const [isDelete, setIsDelete] = useState(false);
  const history = useHistory();
  let userDelete;
console.log(perPage)

  if (isDelete) {
    history.push('/');
    userDelete = userData.filter(item => item.id === isDelete);
  }

  const handleClick = () => {
    castErrors()
    setCurrentUser('');
    history.push('/createPeople');
  };

  const handleClickDelete = () => {
    setIsDelete(false);
    requestUserDelete(isDelete);
  };

  useEffect(() => {
    if (!userData) {
      requestGetUser();
    }
  }, []);


  return (
    <Container>
      {isDelete ? (
        <Modal
          isDelete={isDelete}
          userDelete={userDelete}
          setIsDelete={setIsDelete}
          handleClickDelete={handleClickDelete}
        />
      ) : (
        <div>
          <AddPerson>
            <Switch/>
            <Button
              type="button"
              onClick={handleClick}
              width="150px"
              bgColor="#678bb7"
              color="#ede4f5"
            >
              Add New Person
            </Button>
          </AddPerson>

          <ListUser theme={perPage}>
            {userData && userData
              .slice(startRange, endPage)
              .map(item => (
                <Card
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  surname={item.surname}
                  desc={item.desc}
                  setIsDelete={setIsDelete}
                />
              ))}
          </ListUser>
          <Pagination/>
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = (state: UserListInterface) => ({
  userData: state.getUser.userData,
  startRange: state.getUser.startRange,
  endPage: state.getUser.endPage,
  perPage: state.getUser.perPage,
});

export default (
  connect(mapStateToProps, actions)(UserList)
);
