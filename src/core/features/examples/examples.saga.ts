import { takeLatest, put, call } from '@redux-saga/core/effects';
import { fetchUsers, actions } from './examples.slice';

async function getPeople() {
  const response = await fetch('http://swapi.dev/api/people');
  const data = await response.json();

  return data.results;
}

export function* workerSaga(): any {
  const data: any = yield call(getPeople);

  yield put(actions.setUsers(data));
}

export function* watchClickSaga() {
  yield takeLatest(fetchUsers, workerSaga);
}

export default function* exampleSaga() {
  yield watchClickSaga();
}
