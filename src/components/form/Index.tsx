import React, { FunctionComponent, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../../redux/actions';
import {
  Button,
  FieldLabel,
  ErrorMessage,
} from '../../view/Index';
import { interfaceCreatePeople, CreatePeopleProps } from '../models';

import { Wrapper, FormButton, InputFieldClass } from '../../view/styled';

type CreatePeopleTypes = CreatePeopleProps;

const CreatePeople: FunctionComponent<CreatePeopleTypes> = ({
    requestUserCreate, requestUserPut, currentUser, serverErrors,
                                                              userData,
                                                              userSuccess, castErrors
   }) => {
  const userCurrent = currentUser ? userData.filter(item => item.id === currentUser) : '';

  const [initialValues, setInitialValues ] = useState({
    name: userCurrent ? userCurrent[0].name : '',
    surname: userCurrent ? userCurrent[0].surname : '',
    desc: userCurrent ? userCurrent[0].desc : '',
  });

  const history = useHistory();

  const handleChangeCancel = () => {
    castErrors()
    history.push('/');
  };
  useEffect(() => {
    if (userSuccess) {
      debugger
      handleChangeCancel();
    }
  }, [userSuccess])

  const onHandlerSubmit= (event: any) => {
    event.preventDefault();
      if (currentUser) {
        debugger
        requestUserPut(+currentUser, initialValues);
      } else {
        debugger
        requestUserCreate(initialValues);
      }
  }
  const handleChange = (data: { target: { name: string; value: string }}) => {
    const { name, value } = data.target;

    const current = ({
        [name]: value.replace(/[^\w]/, '')
    });
    setInitialValues({
      name: current.name !== undefined ? current.name : initialValues.name,
      surname: current.surname !== undefined ? current.surname : initialValues.surname,
      desc: current.desc !== undefined ? current.desc : initialValues.desc,
    });
    debugger
  };

  return (
    <Wrapper>
    <form onSubmit={onHandlerSubmit}>
      {currentUser ? (
        <h1>
          Create
          {initialValues.name}
        </h1>
        )
        : <h1>create new User</h1>}
         <FieldLabel
           text="Name"
         >
           <InputFieldClass
             placeholder={initialValues.name}
             value={initialValues.name}
             onChange={handleChange}
             name="name"
             type='text'
           />
           {serverErrors.name
             ? serverErrors.name.map((el: string) => {
               return <ErrorMessage key={el} text={el}/>;
             })
             : null}
         </FieldLabel>
      <FieldLabel
        text="surname"
      >
        <InputFieldClass
          placeholder={initialValues.surname}
          value={initialValues.surname}
          onChange={handleChange}
          name="surname"
          type='text'
        />
        {serverErrors.surname
          ? serverErrors.surname.map((el) => {
            return <ErrorMessage key={el} text={el}/>;
          })
          : null}
      </FieldLabel>
      <FieldLabel
        text="desc"
      >
        <InputFieldClass
          placeholder={initialValues.desc}
          value={initialValues.desc}
          onChange={handleChange}
          name="desc"
          type='text'
        />
        {serverErrors.desc
          ? serverErrors.desc.map((el) => {
            return <ErrorMessage key={el} text={el}/>;
          })
          : null}
      </FieldLabel>
      <FormButton>
        <Button
          type="button"
          text="Cancel"
          margin="0 10px 0 0"
          onClick={handleChangeCancel}
        />
        <Button
          type="submit"
          text="Save Changes"
          disabled={initialValues.name === ''}
        />
      </FormButton>
    </form>
    </Wrapper>
  );
}

CreatePeople.propTypes = {
  requestUserCreate: PropTypes.func.isRequired,
};

const mapStateToProps = (state: interfaceCreatePeople) => ({
  serverErrors: state.getUser.userErrors,
  currentUser: state.getUser.currentUser,
  userSuccess: state.getUser.userPutSuccess,
  userData: state.getUser.userData,
  userLoading: state.getUser.userLoading,
});

// @ts-ignore
export default connect(mapStateToProps, userActions)(CreatePeople);
