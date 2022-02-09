import {
  getUsersStart,
  getUsersFailed,
  getUsersSuccess,
  updateUsersStart,
  updateUsersSuccess,
  updateUsersFailure,
} from "./../Context-Api/Users/Action";
import axiosInstance from "./../axios";

//get all users

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axiosInstance.get("user");
    dispatch(getUsersSuccess(res.data));
  } catch (error) {
    dispatch(getUsersFailed());
  }
};

//update User

export const updateUser = async (id, dispatch, values) => {
  dispatch(updateUsersStart());
  try {
    const res = await axiosInstance.put("user/" + id, values);
    dispatch(updateUsersSuccess(res.data));
  } catch (error) {
    dispatch(updateUsersFailure());
  }
};
