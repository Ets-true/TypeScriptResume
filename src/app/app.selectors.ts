import { RootState } from 'core/state/store';

export const selectUser = (state: RootState) => state.app.user;
export const selectTitle = (state: RootState) => state.app.title;
