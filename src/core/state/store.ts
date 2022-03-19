import createSagaMiddleware from 'redux-saga';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import saga from './saga';
import { reducer as app } from 'app/app.slice';
import { reducer as example } from 'core/features/examples/examples.slice';

import { counterSlice } from 'core/features/counter/counter.slice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    app,
    example,
    counter: counterSlice.reducer,
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
