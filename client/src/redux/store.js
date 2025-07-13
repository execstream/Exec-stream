import { configureStore } from '@reduxjs/toolkit';
import newsletterReducer from './slices/newsletterSlice';


const store = configureStore({
  reducer: {
    newsletter: newsletterReducer,
  
  },
});

export default store;