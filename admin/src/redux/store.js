import { configureStore } from '@reduxjs/toolkit';
// Import all the reducer functions from your slices
import expertSliceReducer from './slices/expertSlice'; // Adjust path as needed
import contentSliceReducer from './slices/contentSlice'; // Example: if you have a content slice
import tagsSliceReducer from './slices/tagsSlice'; // Example: if you have a tags slice
import newsletterSliceReducer from './slices/newsletterSlice'; // Example: if you have a newsletter slice

/**
 * This is the main Redux store setup.
 * The `reducer` object is where you combine all the different slices of your application state.
 * The key you provide here (e.g., 'experts') is the name of the state slice that you will
 * access in your components with `useSelector((state) => state.experts)`.
 *
 * *** FIX ***
 * Ensure that the `expertSlice.reducer` is included here. If it's missing,
 * `state.experts` will be undefined in your components, and no data will be displayed.
 */
const store = configureStore({
  reducer: {
    // The key 'experts' MUST match what you use in useSelector (e.g., state.experts)
    experts: expertSliceReducer,
    
    // Add other slice reducers here as you create them
    content: contentSliceReducer,
    tags: tagsSliceReducer,
    newsletter: newsletterSliceReducer,
    
    // ... more reducers
  },
});

export default store;
