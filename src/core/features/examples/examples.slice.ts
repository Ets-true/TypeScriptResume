import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ExampleActionsEnum {
  fetchUsers = 'example/fetchUsers',
}

export interface ExampleUser {
  name: string;
  mass: string;
  height: string;
}

interface ExampleState {
  users: ExampleUser[];
}

export const fetchUsers = createAction(ExampleActionsEnum.fetchUsers);

export const exampleInitialState: ExampleState = {
  users: [],
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState: exampleInitialState,
  reducers: {
    setUsers: (state, action: PayloadAction<ExampleUser[]>) => {
      state.users = action.payload;
    },
  },
});

export const { actions, name, reducer } = exampleSlice;
