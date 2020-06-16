import { TYPES } from '../types';

const defaultState = {
  cardAction: 'GET_USER',
  isShowModal: false,
  idUser: 0,
  isShowForm: false,
};

// -------- Reducer --------

export default (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.SET_CARD_ACTION: {

      return {
        ...state,
        cardAction: action.action,
      };
    }

    case TYPES.SET_CARD_ID: {

      return {
        ...state,
        idUser: action.id,
      };
    }

    case TYPES.SET_SHOW_FORM: {
      return {
        ...state,
        isShowForm: action.isShowForm,
      };
    }

    default: {
      return state;
    }
  }
};
