import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  title: string;
}

export const appStateName = 'app';

export const appInitialState: AppState = {
  title: 'Initial title',
};

const appSlice = createSlice({
  name: appStateName,
  initialState: appInitialState,

  reducers: {
    updateTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
});

export const { actions, name, reducer } = appSlice;
