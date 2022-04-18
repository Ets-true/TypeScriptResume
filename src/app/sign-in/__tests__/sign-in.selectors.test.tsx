import { initialRootState, RootState } from 'core/state/store';
import * as selectors from '../sign-in.selectors';

describe('SignIn Selectors', () => {
  let state: RootState;

  beforeEach(() => {
    state = initialRootState;
  });

  it('should select "loading" property', () => {
    expect(selectors.selectLoading(state)).toBeFalsy();
  });
});
