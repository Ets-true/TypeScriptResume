import { all } from '@redux-saga/core/effects';
import appSagas from 'app/app.saga';
import { signInSaga } from 'app/sign-in/sign-in.saga';
import { signUpSaga } from 'app/sign-up/sign-up.saga';
import exampleSaga from 'core/features/examples/examples.saga';

export default function* saga() {
  yield all([appSagas(), exampleSaga(), signUpSaga(), signInSaga()]);
}
