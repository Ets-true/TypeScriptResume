import { all } from '@redux-saga/core/effects';

import { appSagas } from 'app/app.saga';
import { profileEditSaga } from 'app/profile/profile-edit/profile-edit.saga';
import { profileSaga } from 'app/profile/profile.saga';
import { signInSaga } from 'app/sign-in/sign-in.saga';
import { signUpSaga } from 'app/sign-up/sign-up.saga';
import { exampleSaga } from 'core/features/examples/examples.saga';

export default function* saga() {
  // prettier-ignore
  yield all([
    appSagas(),
    profileEditSaga(),
    profileSaga(),
    signUpSaga(),
    signInSaga(),
    exampleSaga(),
  ]);
}
