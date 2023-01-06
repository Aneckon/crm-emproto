import { createSlice } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

interface userState {
  token: string | null;
  user: string[];
}

const initialState: userState = { token: null, user: [] };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authToken: (state, action) => {
      state.token = action.payload;
    },
    authUser: (state, action) => {
      state.user.push(action.payload);
    },
    authLogout: (state) => {
      state.token = '';
      state.user = [];
      cookies.set('user', '', { path: '/', maxAge: 604800 });
      cookies.set('token', '', { path: '/', maxAge: 604800 });
    },
  },
});

export const { authUser, authToken, authLogout } = authSlice.actions;
export default authSlice.reducer;
