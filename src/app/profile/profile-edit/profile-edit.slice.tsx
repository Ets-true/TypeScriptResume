import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProfileEditState {
  loading: boolean;
}

export const profileEditInitialState: ProfileEditState = {
  loading: false,
};

const profileEditSlice = createSlice({
  name: 'profileEdit',
  initialState: profileEditInitialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { reducer, actions, name } = profileEditSlice;
