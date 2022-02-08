import {
  getUsersStart,
  getUsersFailed,
  getUsersSuccess,
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
