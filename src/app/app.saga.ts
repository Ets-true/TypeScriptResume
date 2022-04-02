import { ApiReject } from './../core/services/api.service';
import { checkAuth } from 'core/features/users/users.api';
import { all, call, takeLatest } from 'redux-saga/effects';
import { startAppActoin } from './app.slice';

// ======================== Start App ==========================================
function* appStartWorker(): any {
  try {
    const data = yield call(checkAuth);

    console.log('Data error', { data });
  } catch (e) {
    console.log('Catch error', (e as ApiReject).error);
  }

  // console.log('Check auth reslut', authData);
}

function* appStartWatcher() {
  yield takeLatest(startAppActoin, appStartWorker);
}
// ======================== /Start App =========================================

export default function* appSagas() {
  yield all([appStartWatcher()]);
}
