import { RootReduxState } from 'core/state/redux.store';

export const selectLoading = (state: RootReduxState) => state.profile.loading;
