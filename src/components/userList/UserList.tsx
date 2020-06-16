import React, { useEffect, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ManageCard from '../card/index';
import Pagination from '../pagination/Pagination';
import * as actions from '../../redux/actions';
import { ButtonComponent } from '../../view';
import { Container, AddPerson, ListUser } from '../../view/styled';
import { UserListProps, UserListInterface } from '../../models';
import Switch from '../../view/Switch';

type UserListTypes = UserListProps;

const UserList: FunctionComponent<UserListTypes>  = ({
   userData, requestGetUser, startRange, endPage, castErrors, perPage, setIsShowForm
}) => {
  const history = useHistory();


  const handleClick = () => {
    castErrors();
    setIsShowForm(true)
    history.push('/createPeople');
  };

  useEffect(() => {
    if (!userData) {
      requestGetUser();
    }
  }, []);


  return (
    <Container>
        <div>
          <AddPerson>
            <Switch/>
            <ButtonComponent
              type="button"
              onClick={handleClick}
              width="150px"
              bgColor="#678bb7"
              color="#ede4f5"
            >
              Add New Person
            </ButtonComponent>
          </AddPerson>

          <ListUser theme={perPage}>
            {userData && userData
              .slice(startRange, endPage)
              .map(item => (
                <ManageCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  surname={item.surname}
                  desc={item.desc}
                />
              ))}
          </ListUser>
          <Pagination/>
        </div>
      )
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
