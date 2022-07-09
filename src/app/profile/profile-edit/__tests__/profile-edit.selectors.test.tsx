import { initialRootReduxState, RootReduxState } from 'core/state/redux.store';
import * as selectors from '../profile-edit.selectors';

describe('ProfileEdit Selectors', () => {
  let state: RootReduxState;

  beforeEach(() => {
    state = initialRootReduxState;
  });

  it('should select "loading" property', () => {
    expect(selectors.selectLoading(state)).toBeFalsy();
  });
});
