import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  title: string;
}

export const appInitialState: AppState = {
  title: 'Initial title',
};

const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    updateTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
});

export const { actions, name, reducer } = appSlice;
