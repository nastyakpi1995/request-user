import FETCH_TYPES, { TYPES } from './types';

export const requestGetUser = (data) => ({
  type: FETCH_TYPES.GET_REQUEST,
  data,
});

export const successGetUser = (data) => ({
  type: FETCH_TYPES.GET_SUCCESS,
  data,
});

export const errorGetUser = (data) => ({
  type: FETCH_TYPES.GET_FAIL,
  data,
});

export const requestUserCreate = (data) => ({
  type: FETCH_TYPES.POST_REQUEST,
  data,
});

export const successUserCreate = (data) => ({
  type: FETCH_TYPES.POST_SUCCESS,
  data,
});

export const errorUserCreate = (data) => ({
  type: FETCH_TYPES.POST_FAIL,
  data,
});

export const requestUserDelete = (id) => ({
  type: FETCH_TYPES.DELETE_REQUEST,
  id,
});

export const successUserDelete = (id) => ({
  type: FETCH_TYPES.DELETE_SUCCESS,
  id,
});

export const errorUserDelete = (id) => ({
  type: FETCH_TYPES.DELETE_FAIL,
  id,
});

export const requestUserPut = (id, data) => ({
  type: FETCH_TYPES.PUT_REQUEST,
  id,
  data,
});

export const successUserPut = (id) => ({
  type: FETCH_TYPES.PUT_SUCCESS,
  id,
});

export const errorUserPut = (id) => ({
  type: FETCH_TYPES.PUT_FAIL,
  id,
});

export const setCurrentPage = (currentPage) => ({
  type: FETCH_TYPES.SET_CURRENT_PAGE,
  currentPage,
});

export const castErrors = () => ({
  type: FETCH_TYPES.CAST_ALL_ERRORS,
});

export const setPages = (perPage) => ({
  type: FETCH_TYPES.SET_COUNT_PAGES,
  perPage
});

export const setAction = (action) => ({
  type: TYPES.SET_CARD_ACTION,
  action
});

export const setIdUser = (id) => ({
  type: TYPES.SET_CARD_ID,
  id
})

export const setIsShowForm = (isShowForm) => ({
    type: TYPES.SET_SHOW_FORM,
    isShowForm
});

export const setInitialValues = (initialValues) => ({
  type: TYPES.SET_INITIAL_VALUES,
  initialValues
})
