---
to: <%= (stateType === 'Redux' && `${path}/${h.changeCase.param(pluralName)}.slice.tsx`) || null %>
---
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { <%= h.changeCase.pascal(singularName) %> } from './<%= h.changeCase.param(pluralName) %>.types';

export interface <%= h.changeCase.pascal(pluralName) %>State {
  loading: boolean;
  collection: <%= h.changeCase.pascal(singularName) %>[];
}

export const <%= h.changeCase.camel(pluralName) %>InitialState: <%= h.changeCase.pascal(pluralName) %>State = {
  loading: false,
  collection: [],
};

const <%= h.changeCase.camel(pluralName) %>Slice = createSlice({
  name: '<%= h.changeCase.camel(pluralName) %>',
  initialState: <%= h.changeCase.camel(pluralName) %>InitialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },

    set<%= h.changeCase.pascal(pluralName) %>(state, action: PayloadAction<<%= h.changeCase.pascal(singularName) %>[]>) {
      state.collection = action.payload
    },
  },
});

export const { reducer, actions, name } = <%= h.changeCase.camel(pluralName) %>Slice;
