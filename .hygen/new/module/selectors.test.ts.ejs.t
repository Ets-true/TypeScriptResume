---
to: "<%= stateType === 'Redux' ? `${path}/__tests__/${kebabName}.selectors.test.tsx` : null %>"
---
import { initialRootState, RootState } from '<%= paths.fromRoot.reduxStore %>';
import * as selectors from '../<%= kebabName %>.selectors';

describe('<%= moduleName %> Selectors', () => {
  let state: RootState;

  beforeEach(() => {
    state = initialRootState
  });

  it('should select "loading" property', () => {
    expect(selectors.selectLoading(state)).toBeFalsy();
  });
});
