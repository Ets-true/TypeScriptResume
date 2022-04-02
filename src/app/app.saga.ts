import { all, call, put, takeLatest } from 'redux-saga/effects';

import { actions } from 'app/app.slice';

import { ApiReject } from './../core/services/api.service';
import { checkAuth } from 'core/features/users/users.api';
import { startAppActoin } from './app.slice';
import { CheckAuthResponse } from 'core/features/users/users.constants';

// ======================== Start App ==========================================
function* appStartWorker(): any {
  try {
    const data: CheckAuthResponse = yield call(checkAuth);

    if (data.user) {
      yield put(actions.updateUser(data.user));
    }
  } catch (e) {
    console.log('Catch error', (e as ApiReject).error);
  }
}

function* appStartWatcher() {
  yield takeLatest(startAppActoin, appStartWorker);
}
// ======================== /Start App =========================================

export default function* appSagas() {
  yield all([appStartWatcher()]);
}
