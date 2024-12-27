import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

// Create the Redux store with the rootReducer
const store = configureStore({
    reducer: rootReducer,
});

// Export the store as the default export
export default store;

// Define the RootState and AppDispatch types for better TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
