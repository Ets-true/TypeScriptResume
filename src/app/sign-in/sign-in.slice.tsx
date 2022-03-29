import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SignInFormData {
  login: string;
  password: string;
}
export interface SignInState {
  loading: boolean;
}

export const signInInitialState: SignInState = {
  loading: false,
};

export enum SignInActionsEnum {
  sendFormData = 'signin/sendFormData',
}

export const sendSignInFormData = createAction<SignInFormData>(
  SignInActionsEnum.sendFormData
);

const signInSlice = createSlice({
  name: 'signIn',
  initialState: signInInitialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { reducer, actions, name } = signInSlice;
