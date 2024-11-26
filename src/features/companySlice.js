// src/features/companySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companies: [],
  status: "idle", // 'loading', 'succeeded', 'failed'
  error: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    addCompanyStart: (state) => {
      state.status = "loading";
    },
    addCompanySuccess: (state, action) => {
      state.status = "succeeded";
      state.companies.push(action.payload);
    },
    addCompanyFail: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    fetchCompaniesStart: (state) => {
      state.status = "loading";
    },
    fetchCompaniesSuccess: (state, action) => {
      state.status = "succeeded";
      state.companies = action.payload;
    },
    fetchCompaniesFail: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    resetCompanyState: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
});

export const {
  addCompanyStart,
  addCompanySuccess,
  addCompanyFail,
  fetchCompaniesStart,
  fetchCompaniesSuccess,
  fetchCompaniesFail,
  resetCompanyState,
} = companySlice.actions;

export default companySlice.reducer;
