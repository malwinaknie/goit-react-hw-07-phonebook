import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice.js';

export default configureStore({
  reducer: {
    contacts: contactReducer,
  },
});