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
