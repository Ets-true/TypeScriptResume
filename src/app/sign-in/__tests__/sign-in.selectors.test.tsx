import { initialRootState, RootReduxState } from 'core/state/redux.store';
import * as selectors from '../sign-in.selectors';

describe('SignIn Selectors', () => {
  let state: RootReduxState;

  beforeEach(() => {
    state = initialRootState;
  });

  it('should select "loading" property', () => {
    expect(selectors.selectLoading(state)).toBeFalsy();
  });
});
