---
to: "<%= stateType === 'Redux' ? `${path}/__tests__/${kebabName}.slice.test.tsx` : null %>"
---
import { reducer, <%= camelName %>InitialState } from '../<%= kebabName %>.slice';

describe('<%= camelName %>Slice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual(<%= camelName %>InitialState);
  });

  it('should have "loading" property', () => {
    expect((<%= camelName %>InitialState as any).loading).toBeDefined();
  });
});
