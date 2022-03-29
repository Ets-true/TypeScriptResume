import { User } from 'core/interfaces/user.interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  user: User;
  title: string;
  token: string;
}

export const appStateName = 'app';

export const appInitialState: AppState = {
  user: {
    login: '',
  },

  title: 'Initial title',
  token: '',
};

const appSlice = createSlice({
  name: appStateName,
  initialState: appInitialState,

  reducers: {
    updateTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },

    updateToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },

    updateUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const { actions, name, reducer } = appSlice;
