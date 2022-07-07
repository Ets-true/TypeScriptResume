import * as profileEdit from 'app/profile/profile-edit/profile-edit.slice';
import * as profile from 'app/profile/profile.slice';
import { SignUpActionsEnum } from '../../app/sign-up/sign-up.slice';
import createSagaMiddleware from 'redux-saga';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import saga from './saga';
import * as app from 'app/app.slice';
import * as home from 'app/home/home.slice';
import * as signUp from 'app/sign-up/sign-up.slice';
import * as signIn from 'app/sign-in/sign-in.slice';
import * as example from 'core/features/examples/examples.slice';
import * as counter from 'core/features/examples/counter/counter.slice';

const sagaMiddleware = createSagaMiddleware();

export const initialRootState: RootReduxState = {
  app: app.appInitialState,
  profileEdit: profileEdit.profileEditInitialState,
  profile: profile.profileInitialState,
  home: home.homeInitialState,
  signIn: signIn.signInInitialState,
  signUp: signUp.signUpInitialState,
  example: example.exampleInitialState,
  counter: counter.counterInitialState,
};

export const reduxStore = configureStore({
  reducer: {
    app: app.reducer,
    profileEdit: profileEdit.reducer,
    profile: profile.reducer,
    home: home.reducer,
    signUp: signUp.reducer,
    signIn: signIn.reducer,
    example: example.reducer,
    counter: counter.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [SignUpActionsEnum.postFormData],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export type AppDispatch = typeof reduxStore.dispatch;
export type RootReduxState = ReturnType<typeof reduxStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootReduxState,
  unknown,
  Action<string>
>;
