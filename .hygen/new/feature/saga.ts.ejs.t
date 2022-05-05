---
to: <%= path %>/<%= h.changeCase.param(pluralName) %>.saga.tsx
---
import { call, takeLatest, put, all } from 'redux-saga/effects';

import * as actions from './<%= h.changeCase.param(pluralName) %>.actions';
import { actions as sliceActions } from './<%= h.changeCase.param(pluralName) %>.slice';
import { fetch<%= h.changeCase.pascal(pluralName) %> } from './<%= h.changeCase.param(pluralName) %>.api';
import { <%= h.changeCase.pascal(pluralName) %>Response } from './<%= h.changeCase.param(pluralName) %>.types';

function* fetch<%= h.changeCase.pascal(pluralName) %>Worker(): any {
  const <%= h.changeCase.camel(pluralName) %>: <%= h.changeCase.pascal(pluralName) %>Response = yield call(fetch<%= h.changeCase.pascal(pluralName) %>);
  yield put(sliceActions.set<%= h.changeCase.pascal(pluralName) %>(<%= h.changeCase.camel(pluralName) %>));
}

function* fetch<%= h.changeCase.pascal(pluralName) %>Watcher() {
  yield takeLatest(actions.fetch<%= h.changeCase.pascal(pluralName) %>Action, fetch<%= h.changeCase.pascal(pluralName) %>Worker);
}

export function* <%= h.changeCase.camel(pluralName) %>Saga() {
  yield all([
    fetch<%= h.changeCase.pascal(pluralName) %>Watcher(),
  ]);
}
