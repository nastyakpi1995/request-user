import FETCH_TYPES from '../types';

const defaultState = {
  totalLength: 0,
  perPage: 5,
  endPage: 5,
  pagesQuantity: 1,
  currentPage: 1,
  startRange: 0,
  userData: null,
  userPutSuccess: false,
  userLoading: false,
  currentUser: '',
  userErrors: {
    name: null,
    surname: null,
    desc: null,
  },
};

// -------- Reducer --------

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_TYPES.GET_REQUEST: {
      return {
        ...state,
        userLoading: true,
        userData: action.data,
      };
    }

    case FETCH_TYPES.SET_CURRENT_PAGE: {
      const endPage = action.currentPage * 5;

      return {
        ...state,
        endPage,
        currentPage: action.currentPage,
        pagesQuantity: Math.ceil(state.userData.length / 5),
        startRange: endPage - 5,
      };
    }

    case FETCH_TYPES.GET_SUCCESS: {
      return {
        ...state,
        userLoading: false,
        userData: action.data,
        totalLength: action.data.length,
        pagesQuantity: Math.ceil(action.data.length / 5),
      };
    }

    case FETCH_TYPES.GET_FAIL: {
      return {
        ...state,
        userErrors: action.data,
        userPutSuccess: false,
        userLoading: false,
      };
    }

    case FETCH_TYPES.POST_REQUEST: {
      return {
        ...state,
        userLoading: true,
      };
    }

    case FETCH_TYPES.POST_SUCCESS: {
      return {
        ...state,
        userPutSuccess: true,
        userLoading: false,
        userData: action.data,
      };
    }

    case FETCH_TYPES.POST_FAIL: {
      return {
        ...state,
        userErrors: action.data,
        userPutSuccess: false,
        userLoading: false,
      };
    }

    case FETCH_TYPES.DELETE_REQUEST: {
      return {
        ...state,
        userLoading: true,
      };
    }

    case FETCH_TYPES.DELETE_SUCCESS: {
      return {
        ...state,
        userLoading: false,
        userData: action.data,
      };
    }

    case FETCH_TYPES.DELETE_FAIL: {
      return {
        ...state,
        userPutSuccess: false,
        userLoading: false,
      };
    }


    case FETCH_TYPES.PUT_REQUEST: {
      return {
        ...state,
        userLoading: true,
      };
    }

    case FETCH_TYPES.PUT_SUCCESS: {
      return {
        ...state,
        userPutSuccess: true,
        userLoading: false,
        userData: action.data,
      };
    }

    case FETCH_TYPES.PUT_FAIL: {
      return {
        ...state,
        userPutSuccess: false,
        userLoading: false,
      };
    }

    case FETCH_TYPES.SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.id,
      };
    }

    default: {
      return state;
    }
  }
};
