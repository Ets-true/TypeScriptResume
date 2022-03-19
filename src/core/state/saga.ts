import { all } from '@redux-saga/core/effects';
import exampleSaga from 'core/features/examples/examples.saga';

export default function* saga() {
  yield all([exampleSaga()]);
}
