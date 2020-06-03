import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Card from '../card/card';
import Pagination from '../pagination/pagination';
import * as actions from '../../redux/actions';
import {Button} from '../../view';
import Modal from '../modal/modal';
import { Container } from '../../view/styled/index';

const UserList = ({
                    userData, requestGetUser, startRange, endPage, requestUserDelete, setCurrentUser,
                  }) => {
  const [isDelete, setIsDelete] = useState(false);
  const history = useHistory();
  let userDelete;

  if (isDelete) {
    history.push('/');
    userDelete = userData.filter(item => item.id === isDelete);
  }

  const handleClick = () => {
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
          userDelete={userDelete[0].name}
          setIsDelete={setIsDelete}
          handleClickDelete={handleClickDelete}
        />
      ) : (
        <div>
          <div>
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
          </div>
          <Button
            onClick={handleClick}
            position="initial"
            margin="0 0 10px 20px"
          >
            Add New Person
          </Button>
          <Pagination/>
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  userData: state.getUser.userData,
  startRange: state.getUser.startRange,
  endPage: state.getUser.endPage,
});

export default (
  connect(mapStateToProps, actions)(UserList)
);
