import { createSlice } from "@reduxjs/toolkit";

export const detailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    phone: "",
    userName: "",
    email: "",
    terms: false,
    promotions: false,
    otp: "",
    name: "",
    age: "",
    gender: "",
    mood: "",
    genre: "",
    singerVoice: "",
    generatedSong: "",
    loading: "false",
  },
  reducers: {
    updateDetails: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        if (state.hasOwnProperty(key)) {
          state[key] = action.payload[key];
        }
      });
    },
  },
});

export const { updateDetails } = detailsSlice.actions;

export default detailsSlice.reducer;
