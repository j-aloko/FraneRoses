import {
  loginStart,
  loginFailure,
  loginSuccess,
} from "./../Context-Api/Authentication/Action";
import axiosInstance from "./../axios";

export const login = async (info, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post("auth/login", info);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const Register = async (info) => {
  try {
    await axiosInstance.post("auth/register", info);
  } catch (error) {
    console.log(error);
  }
};
