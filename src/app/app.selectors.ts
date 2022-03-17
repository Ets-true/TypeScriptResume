import { RootState } from 'core/state/store';

export const selectTitle = (state: RootState) => state.app.title;
