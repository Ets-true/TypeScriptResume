import createSagaMiddleware from 'redux-saga';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import saga from './saga';
import * as app from 'app/app.slice';
import * as signUp from 'app/sign-up/sign-up.slice';
import * as signIn from 'app/sign-in/sign-in.slice';
import * as example from 'core/features/examples/examples.slice';
import * as counter from 'core/features/counter/counter.slice';

const sagaMiddleware = createSagaMiddleware();

export const initialRootState: RootState = {
  app: app.appInitialState,
  signIn: signIn.signInInitialState,
  signUp: signUp.signUpInitialState,
  example: example.exampleInitialState,
  counter: counter.counterInitialState,
};

export const store = configureStore({
  reducer: {
    app: app.reducer,
    signUp: signUp.reducer,
    signIn: signIn.reducer,
    example: example.reducer,
    counter: counter.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
