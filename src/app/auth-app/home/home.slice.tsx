import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HomeState {
  loading: boolean;
}

export const homeInitialState: HomeState = {
  loading: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState: homeInitialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { reducer, actions, name } = homeSlice;
