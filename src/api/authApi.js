// src/services/authApi.js
import axios from "axios";

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/users/login",
      credentials
    );
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};
export const SignUpUser = async (credentials) => {
  try {
    const response = await axios.post(
      "https://yellowpagesbackend.cinisolution.com/api/users/register",
      credentials
    );
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};
