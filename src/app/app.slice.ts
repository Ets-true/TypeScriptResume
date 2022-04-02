import { User } from 'core/features/users/users.constants';
import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

export enum AppActionsEnum {
  startApp = 'app/startApp',
  checkAuth = 'app/checkAuth',
}

export const startAppActoin = createAction(AppActionsEnum.startApp);
export const appCheckAuthAction = createAction(AppActionsEnum.checkAuth);
export interface AppState {
  user: User | null;
  title: string;
}

export const appStateName = 'app';

export const appInitialState: AppState = {
  user: null,

  title: 'Initial title',
};

const appSlice = createSlice({
  name: appStateName,
  initialState: appInitialState,

  reducers: {
    updateTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },

    updateUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const { actions, name, reducer } = appSlice;
