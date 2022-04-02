import { all, call, put, takeLatest } from 'redux-saga/effects';

import { actions } from 'app/app.slice';
import { submitSignUp } from 'core/features/users/users.api';
import { SignUpResponse } from 'core/features/users/users.constants';
import { setStorageToken } from 'core/hooks/use-token';
import { postFormDataAction } from './sign-up.slice';

function* submitSignUpWorker(data: any): any {
  try {
    const response: SignUpResponse = yield call(submitSignUp, data.payload);

    if (response.token) {
      setStorageToken(response.token);

      if (response.user) {
        yield put(actions.updateUser(response.user));
      }
    }
  } catch (err) {
    console.log('Error sign up', { err });
  }
}

function* submitSignUpWatcher() {
  yield takeLatest(postFormDataAction, submitSignUpWorker);
}

export function* signUpSaga() {
  yield all([submitSignUpWatcher()]);
}
