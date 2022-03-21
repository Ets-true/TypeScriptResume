import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SignInState {
  loading: boolean;
}

export const signInInitialState: SignInState = {
  loading: false,
}

const signInSlice = createSlice({
  name: 'signIn',
  initialState: signInInitialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    }
  }
})

export const { reducer, actions, name } = signInSlice