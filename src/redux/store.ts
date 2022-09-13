import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './slices/notes';

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
