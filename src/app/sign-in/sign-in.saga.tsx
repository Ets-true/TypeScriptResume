import { DefaultResponse } from 'core/interfaces/response.interfaces';
import { takeLatest, all, call, put } from 'redux-saga/effects';

import api from 'core/services/api.service';
import { actions } from 'app/app.slice';
import { setStorageToken } from 'core/hooks/use-token';
import { sendSignInFormData, SignInFormData } from './sign-in.slice';
import { User } from 'core/interfaces/user.interfaces';

interface SignInResponse extends DefaultResponse {
  user?: User;
  token?: string;
}

async function submitSignIn(data: SignInFormData) {
  const result = await api.post<SignInResponse>('/api/users/signin', data);

  return result;
}

function* workSendFormData(data: any): any {
  const response: SignInResponse = yield call(submitSignIn, data.payload);

  if (response.success && response.token) {
    setStorageToken(response.token);
    yield put(actions.updateToken(response.token));

    if (response.user) {
      yield put(actions.updateUser(response.user));
    }
  }

  yield true;
}

function* watchSendFormData() {
  yield takeLatest(sendSignInFormData, workSendFormData);
}

export function* signInSaga() {
  yield all([watchSendFormData()]);
}
