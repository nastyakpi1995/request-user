import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {Formik, Form} from 'formik';
import * as userActions from '../../redux/actions';
import { initialValues } from './CreatePeopleFormSchema';

import {
  Button,
  Input,
  FieldLabel,
  ErrorMessage,
} from '../../view/index';

import {Wrapper, FormButton} from '../../view/styled/index';

function CreatePeople({
    requestUserCreate, requestUserPut, currentUser, serverErrors, userData, userSuccess, castErrors
   }) {
  const history = useHistory();

  const handleChangeCancel = () => {
    castErrors()
    history.push('/');
  };

  return (
    <Wrapper>
      <Formik
        enableReinitialize
        initialValues={initialValues(currentUser, userData)}
        onSubmit={(values) => {
          debugger
          if (userSuccess) {
            handleChangeCancel();
            requestUserCreate(values);
            debugger
          } else {
            debugger
            requestUserPut(+currentUser, values);
          }
        }}
      >
        {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
          <>
            <Form onSubmit={handleSubmit}>
              {currentUser ? (
                  <h1>
                    Create
                    {values.name}
                  </h1>
                )
                : <h1>create new User</h1>}


              <FieldLabel
                text="Name"
              >
                <Input
                  type="text"
                  placeholder={values.name}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="name"
                />
                {serverErrors.name
                  ? serverErrors.name.map((el) => {
                    return <ErrorMessage key={el} text={el}/>;
                  })
                  : null}
              </FieldLabel>
              <FieldLabel
                text="surname"
              >
                <Input
                  type="text"
                  placeholder={values.surname}
                  value={values.surname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="surname"
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
                <Input
                  type="text"
                  placeholder={values.desc}
                  value={values.desc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="desc"
                />
                {serverErrors.desc
                  ? serverErrors.desc.map((el) => {
                    return <ErrorMessage key={el} text={el}/>;
                  })
                  : null}
              </FieldLabel>

            </Form>
            <Form>
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
                  onClick={handleSubmit}
                />
              </FormButton>
            </Form>
          </>
        )}
      </Formik>
    </Wrapper>
  );
}

CreatePeople.propTypes = {
  requestUserCreate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  serverErrors: state.getUser.userErrors,
  currentUser: state.getUser.currentUser,
  userSuccess: state.getUser.userPutSuccess,
  userData: state.getUser.userData,
  userLoading: state.getUser.userLoading,
});


export default connect(mapStateToProps, userActions)(CreatePeople);
