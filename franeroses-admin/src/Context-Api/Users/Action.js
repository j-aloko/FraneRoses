export const getUsersStart = () => ({
  type: "GET_USERS_START",
});

export const getUsersSuccess = (users) => ({
  type: "GET_USERS_SUCCESS",
  payload: users,
});

export const getUsersFailed = () => ({
  type: "GET_USERS_FAILURE",
});

export const updateUsersStart = () => ({
  type: "UPDATE_USERS_START",
});

export const updateUsersSuccess = (users) => ({
  type: "UPDATE_USERS_SUCCESS",
  payload: users,
});

export const updateUsersFailure = () => ({
  type: "UPDATE_USERS_FAILURE",
});

//DELETE USER

export const deleteUser = (id) => ({
  type: "DELETE_USER",
  payload: id,
});
