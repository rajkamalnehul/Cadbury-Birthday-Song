import { createSlice } from "@reduxjs/toolkit";

export const tabSlice = createSlice({
  name: "tab",
  initialState: {
    tab: "registration",
  },
  reducers: {
    updateTab: (state, action) => {
      state.tab = action.payload;
    },
  },
});

export const { updateTab } = tabSlice.actions;

export default tabSlice.reducer;
