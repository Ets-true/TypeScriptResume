---
to: <%= path %>/__tests__/<%= kebab_name %>.slice.test.tsx
---
import { reducer, <%= camel_name %>InitialState } from '../<%= kebab_name %>.slice';

describe('<%= camel_name %>Slice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual(<%= camel_name %>InitialState);
  });

  it('should have "loading" property', () => {
    expect((<%= camel_name %>InitialState as any).loading).toBeDefined();
  });
});
