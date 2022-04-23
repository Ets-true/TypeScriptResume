---
to: <%= path %>/<%= kebab_name %>.slice.tsx
---
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface <%= module_name %>State {
  loading: boolean;
}

export const <%= camel_name %>InitialState: <%= module_name %>State = {
  loading: false,
};

const <%= camel_name %>Slice = createSlice({
  name: '<%= camel_name %>',
  initialState: <%= camel_name %>InitialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
  },
});

export const { reducer, actions, name } = <%= camel_name %>Slice;
