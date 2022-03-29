import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from 'core/services/api.service';
import { User } from 'core/interfaces/user.interfaces';
import { actions } from 'app/app.slice';
import { setStorageToken } from 'core/hooks/use-token';
import { DefaultResponse } from 'core/interfaces/response.interfaces';
import { postFormDataAction, SignUpFromData } from './sign-up.slice';

interface SignUpResponse extends DefaultResponse {
  user?: User;
  token?: string;
}

async function submitSignUp(data: SignUpFromData) {
  return await api.post<SignUpResponse>('/api/users/signup', data);
}

function* workSendFormData(data: any): any {
  const response: SignUpResponse = yield call(submitSignUp, data.payload);

  if (response.success && response.token) {
    setStorageToken(response.token);
    yield put(actions.updateToken(response.token));

    if (response.user) {
      yield put(actions.updateUser(response.user));
    }
  }
}

function* watchPostSignUp() {
  yield takeLatest(postFormDataAction, workSendFormData);
}

export function* signUpSaga() {
  yield all([watchPostSignUp()]);
}
