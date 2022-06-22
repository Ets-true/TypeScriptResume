---
to: <%= path %>/<%= kebab_name %>.saga.tsx
---
import { all } from 'redux-saga/effects';

export function* <%= camel_name %>Saga() {
  yield all([]);
}
