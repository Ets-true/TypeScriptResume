---
to: <%= path %>/__tests__/<%= kebab_name %>.selectors.test.tsx
---
import { initialRootState, RootState } from 'store';
import * as selectors from '../<%= kebab_name %>.selectors';

describe('<%= page_name %> Selectors', () => {
  let state: RootState

  beforeEach(() => {
    state = initialRootState
  })

  it('should select "loading" property', () => {
    expect(selectors.selectLoading(state)).toBeFalsy()
  })
})