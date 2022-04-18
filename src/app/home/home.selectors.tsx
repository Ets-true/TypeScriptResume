import { RootState } from 'core/state/store';

export const selectLoading = (state: RootState) => state.home.loading;
