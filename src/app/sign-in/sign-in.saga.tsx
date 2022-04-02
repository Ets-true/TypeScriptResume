import { takeLatest, all, call, put } from 'redux-saga/effects';

import { DefaultResponse } from 'core/interfaces/response.interfaces';

import { actions } from 'app/app.slice';
import { submitSignIn } from 'core/features/users/users.api';
import { setStorageToken } from 'core/hooks/use-token';
import { signInAction } from './sign-in.slice';
import { SignInResponse } from 'core/features/users/users.constants';

function* submitSignInWorker(data: any): any {
  const response: DefaultResponse<SignInResponse> = yield call(
    submitSignIn,
    data.payload
  );

  if (response.success && response.data) {
    setStorageToken(response.data.token);

    if (response.data.user) {
      yield put(actions.updateUser(response.data.user));
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
