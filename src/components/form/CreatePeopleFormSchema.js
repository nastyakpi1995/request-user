import * as Yup from 'yup';

export function createPeopleFormSchema() {
  return Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Please enter name'),
    surname: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Please enter surname'),
    desc: Yup.string().required('Required'),
  });
}


export const initialValues = (currentUser, userData) => {
  let defaultValues = ({
    name: '',
    surname: '',
    desc: '',
  });

  if (currentUser) {
    const userCurrent = userData.filter(item => item.id === currentUser);

    defaultValues = ({
      name: userCurrent[0].name,
      surname: userCurrent[0].surname,
      desc: userCurrent[0].desc,
    });
  }

  return defaultValues;
};
