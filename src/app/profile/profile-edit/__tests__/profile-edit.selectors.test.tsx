import { initialRootState, RootState } from 'core/state/store';
import * as selectors from '../profile-edit.selectors';

describe('ProfileEdit Selectors', () => {
  let state: RootState;

  beforeEach(() => {
    state = initialRootState;
  });

  it('should select "loading" property', () => {
    expect(selectors.selectLoading(state)).toBeFalsy();
  });
});
