import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { reducer as app } from 'app/app.slice';
import { counterSlice } from 'core/features/counter/counter.slice';

export const store = configureStore({
  reducer: {
    app,
    counter: counterSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
