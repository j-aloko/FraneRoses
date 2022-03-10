import axiosInstance from "./../axios";

export const getTransactions = async (values) => {
  try {
    await axiosInstance.post("transaction", values);
  } catch (error) {
    console.log(error);
  }
};
