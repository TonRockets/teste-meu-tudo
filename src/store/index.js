import userReducer from '../app/user/userSlice';
const { configureStore } = require('@reduxjs/toolkit');

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
