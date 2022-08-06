import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // initialState: {
  //   user: '',
  // },
  reducers: {
    increment: (state) => {
      state.user = 'Wellington';
    },
  },
});

export const { increment } = userSlice.actions;
export default userSlice.reducer;
