import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/auth';
import contactsReducer from './slice/contacrs';

export const store = configureStore({
  reducer: {
    authReducer,
    contactsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
