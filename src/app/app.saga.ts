import { all, call, put, takeLatest } from 'redux-saga/effects';

import { actions } from 'app/app.slice';

import { checkAuth } from 'core/features/users/users.api';
import { startAppActoin } from './app.slice';
import { CheckAuthResponse } from 'core/features/users/users.constants';
import { removeStorageToken } from 'core/hooks/use-token';
import { asyncTimeout } from 'core/helpers/async-timeout';

// ======================== Start App ==========================================
function* appStartWorker(): any {
  try {
    yield put(actions.setAuthLoader(true));
    const data: CheckAuthResponse = yield call(checkAuth);

    if (data.user) {
      yield put(actions.updateUser(data.user));
    }
  } catch (e) {
    removeStorageToken();
    yield put(actions.updateUser());
  } finally {
    yield call(asyncTimeout, 1000);
    yield put(actions.setAuthLoader(false));
  }
}

function* appStartWatcher() {
  yield takeLatest(startAppActoin, appStartWorker);
}
// ======================== /Start App =========================================

export default function* appSagas() {
  yield all([appStartWatcher()]);
}
