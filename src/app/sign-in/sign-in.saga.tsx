import { takeLatest, all, call, put } from 'redux-saga/effects';

import { actions } from 'app/app.slice';
import { signInAction } from './sign-in.slice';
import { submitSignIn } from 'core/features/users/users.api';
import { SignInResponse } from 'core/features/users/users.constants';
import { setStorageToken } from 'core/hooks/use-token';

function* submitSignInWorker(data: any): any {
  const responseData: SignInResponse = yield call(submitSignIn, data.payload);

  if (responseData) {
    setStorageToken(responseData.token);

    if (responseData.user) {
      yield put(actions.updateUser(responseData.user));
    }
  }

  yield true;
}

function* submitSignInWatcher() {
  yield takeLatest(signInAction, submitSignInWorker);
}

export function* signInSaga() {
  yield all([submitSignInWatcher()]);
}
