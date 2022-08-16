import userReducer from '../app/features/userSlice';
const { configureStore } = require('@reduxjs/toolkit');

export default configureStore({
  reducer: {
    user: userReducer
  }
});
