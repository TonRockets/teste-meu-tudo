import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  home: true,
  page: '/',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeRoute: (state, action) => {
      state.home = action.payload.home;
      state.page = action.payload.page;
    },
  },
});

export const { changeRoute } = userSlice.actions;
export default userSlice.reducer;
