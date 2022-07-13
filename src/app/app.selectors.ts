import { RootReduxState } from 'core/state/redux.store';

export const selectUser = (state: RootReduxState) => state.app.user;
export const selectTitle = (state: RootReduxState) => state.app.title;

export const selectAuthLoading = (state: RootReduxState) =>
  state.app.authLoading;
export const selectShowSidebar = (state: RootReduxState) =>
  state.app.showSidebar;
