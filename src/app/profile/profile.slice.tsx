import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProfileState {
  loading: boolean;
}

export const profileInitialState: ProfileState = {
  loading: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { reducer, actions, name } = profileSlice;
