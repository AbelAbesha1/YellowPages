import axios from "axios";
import { useNavigate } from "react-router-dom";

// Function to get the authentication token from localStorage
const getAuthToken = () => {
  return localStorage.getItem("token");
};

// Redirect helper function
const redirectToLogin = () => {
  const navigate = useNavigate();
  navigate("/login");
  throw new Error("User not authenticated. Redirecting to login...");
};

// Function to add a new company
export const addCompany = async (companyData) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/companies",
      companyData
    );
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

// Function to fetch all companies
export const fetchCompanies = async () => {
  const token = getAuthToken();
  if (!token) {
    redirectToLogin();
  }

  try {
    const response = await axios.get("http://localhost:3000/api/companies", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};
