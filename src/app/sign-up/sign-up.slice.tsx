import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

const sliceName = 'signUp';

export enum SignUpActionsEnum {
  postFormData = 'signUp/postFormData',
}

export interface SignUpFromData {
  login: string;
  password: string;
}

export interface SignUpState {
  loading: boolean;
}

export const signUpInitialState: SignUpState = {
  loading: false,
};

export const postFormDataAction = createAction<SignUpFromData>(
  SignUpActionsEnum.postFormData
);

const signUpSlice = createSlice({
  name: sliceName,
  initialState: signUpInitialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { reducer, actions, name } = signUpSlice;
