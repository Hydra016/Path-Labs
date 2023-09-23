import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHeartAttack = createAsyncThunk(
  "medical/heartAttackPrediction",
  async (details) => {
    console.log(details)
    const response = await axios.post(`/api/heartRate`, details);
    return response;
  }
);

const initialState = {
  heartRate: "",
  isLoading: false
};

const medicalSlice = createSlice({
  name: "medical",
  initialState,
  extraReducers: {
    [fetchHeartAttack.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchHeartAttack.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.heartRate = action.payload?.data.prediction
    },
    [fetchHeartAttack.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default medicalSlice.reducer;
