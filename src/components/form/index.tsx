import React, { FunctionComponent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../../redux/actions';
import {
  ButtonComponent,
  FieldLabel,
  ErrorMessage,
} from '../../view';
import { CreatePeopleProps } from '../../models';

import { Wrapper, FormButton, InputFieldClass, Backdrop } from '../../view/styled';

type CreatePeopleTypes = CreatePeopleProps;

const CreatePeople: FunctionComponent<CreatePeopleTypes> = ({
                                                              requestUserCreate, requestUserPut, currentUser, serverErrors,
                                                              userSuccess, castErrors, isShowForm, setIsShowForm, setAction, setInitialValues, initialValues
                                                            }) => {

  const history = useHistory();

  const handleCancel = () => {
    setAction('GET_USER');
    setIsShowForm(false)
    castErrors()
    history.push('/');
  };

  useEffect(() => {
    if (userSuccess) {
      handleCancel();
    }
  }, [userSuccess])

  const onHandlerSubmit= (event: any) => {

    event.preventDefault();
    if (currentUser) {
      requestUserPut(currentUser, initialValues);
    } else {
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
  };

  return (
    <>
      {isShowForm && <Backdrop onClick={handleCancel}/>}
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
            <ButtonComponent
              type="button"
              text="Cancel"
              margin="0 10px 0 0"
              onClick={handleCancel}
            />
            <ButtonComponent
              type="submit"
              text="Save Changes"
              disabled={initialValues.name === ''}
            />
          </FormButton>
        </form>
      </Wrapper>
    </>
  );
}

interface InterfaceCreatePeople {
  cardReducer: {
    isShowForm: boolean,
  }
  getUser: {
    initialValues: {
      name: string,
      surname: string,
      desc: string,
    },
    userErrors: {
      name: [],
      surname: [],
      desc: [],
    },
    userData: any,
    userPutSuccess: string,
    userLoading: boolean,
  }
}

const mapStateToProps = (state: InterfaceCreatePeople) => ({
  serverErrors: state.getUser.userErrors,
  userSuccess: state.getUser.userPutSuccess,
  userData: state.getUser.userData,
  userLoading: state.getUser.userLoading,
  isShowForm: state.cardReducer.isShowForm,
  initialValues: state.getUser.initialValues
});

export default connect(mapStateToProps, userActions)(CreatePeople);
