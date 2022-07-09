---
to: "<%= stateType === 'Redux' ? `${path}/${kebabName}.slice.ts` : null %>"
---
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface <%= moduleName %>State {
  loading: boolean;
}

export const <%= camelName %>InitialState: <%= moduleName %>State = {
  loading: false,
};

const <%= camelName %>Slice = createSlice({
  name: '<%= camelName %>',
  initialState: <%= camelName %>InitialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
  },
});

export const { reducer, actions, name } = <%= camelName %>Slice;
