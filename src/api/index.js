import apiCaller from '../utils/apiCaller';


export const userList = async () => {
  return apiCaller({
    url: '/api/users',
    method: 'get',
  });
};

export const user = async (data) => {
  return apiCaller({
    url: '/api/users',
    method: 'post',
    data,
  });
};

export const userDelete = async (id) => {
  return apiCaller({
    url: `/api/user/${id}`,
    method: 'delete',
  });
};

export const userPut = async (id, data) => {
  return apiCaller({
    url: `/api/user/${id}`,
    method: 'put',
    data,
  });
};
