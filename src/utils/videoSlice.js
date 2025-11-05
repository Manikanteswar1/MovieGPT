import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    isMuted: true,
  },
  reducers: {
    toggleMute: (state) => {
      state.isMuted = !state.isMuted;
    },
    setMute: (state, action) => {
      state.isMuted = action.payload;
    },
  },
});

export const { toggleMute, setMute } = videoSlice.actions;
export default videoSlice.reducer;
