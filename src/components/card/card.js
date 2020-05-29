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
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2174 0.519434L13.4793 1.78142C14.174 2.47622 14.174 3.60273 13.4766 4.30017L4.66324 13.1144L1.34856 13.9462C0.393914 14.1857 -0.185019 13.6029 0.0537574 12.6513L0.885497 9.33627L9.69889 0.522088C10.3951 -0.174178 11.525 -0.172996 12.2174 0.519434ZM5 10.662L3.33836 9L2.55166 9.78673L2 12L4.20318 11.459L5 10.662Z" fill="black"/>
          </svg>
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
