import { all, call, put, takeLatest } from 'redux-saga/effects';

import { actions } from 'app/app.slice';
import { submitSignUp } from 'core/features/users/users.api';
import { SignUpResponse } from 'core/features/users/users.constants';
import { setStorageToken } from 'core/hooks/use-token';
import { postFormDataAction, PostSignUpPayload } from './sign-up.slice';
import { PayloadAction } from '@reduxjs/toolkit';

function* submitSignUpWorker(action: PayloadAction<PostSignUpPayload>): any {
  try {
    const responseData: SignUpResponse = yield call(
      submitSignUp,
      action.payload.formData
    );

    if (responseData.token) {
      setStorageToken(responseData.token);

      if (responseData.user) {
        yield put(actions.updateUser(responseData.user));
      }

      yield action.payload.navigate();
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
