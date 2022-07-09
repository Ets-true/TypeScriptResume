---
to: "<%= stateType === 'Redux' ? `${path}/${kebabName}.saga.ts` : null %>"
---
import { all } from 'redux-saga/effects';

export function* <%= camelName %>Saga() {
  yield all([]);
}
