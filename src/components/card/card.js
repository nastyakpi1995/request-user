import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {Button} from '../../view';
import {
  CardBody, CardWrapper, TitleButton,
} from '../../view/styled';

const Card = ({
                id, name, desc, surname, setIsDelete, setCurrentUser,
              }) => {
  const history = useHistory();
  const handlerHistory = (idUser) => {
    setCurrentUser(idUser);
    history.push('/createPeople');
  };

  const onHandlerUserDelete = (userId) => {
    setIsDelete(userId);
  };

  return (
    <CardWrapper>
      <CardBody>
        <h1>{name}</h1>
        <h5>
          {surname}
        </h5>
        <p>{desc}</p>
      </CardBody>
      <Button
        height="40px"
        width="40px"
        onClick={() => onHandlerUserDelete(id)}
        color="#fff"
        position="absolute"
        bgColor="#e84141"
        border="none"
        top="5px"
      >
        x
      </Button>
      <Button
        onClick={() => handlerHistory(id)}
        width="50px"
        height="50px"
        bgColor="azure"
        position="absolute"
        bottom="10px"
      >
        <TitleButton>
          <img src="CombinedShape.png" alt="rename user"/>
        </TitleButton>

      </Button>
    </CardWrapper>
  );
};

const mapStateToProps = (state) => {
  return ({
    userData: state.getUser.userData,
  });
};

export default (
  connect(mapStateToProps, actions)(Card)
);
