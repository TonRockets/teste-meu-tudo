import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  home: true,
  page: '',
  state: [],
  loanValueSelected: '',
  installmentsSelected: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeRoute: (state, action) => {
      state.home = action.payload.home;
      state.page = action.payload.page;
    },

    setState: (state, action) => {
      state.state = action.payload;
    },

    setSelectedValues: (state, action) => {
      if (action.payload.loanValue) {
        state.loanValueSelected = action.payload.loanValue;
      }
      if (action.payload.installments) {
        state.installmentsSelected = action.payload.installments;
      }
    }
  }
});

export const { changeRoute, setState, setSelectedValues } = userSlice.actions;
export default userSlice.reducer;
