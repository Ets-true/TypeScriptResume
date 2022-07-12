---
to: <%= (stateType === 'Redux' && `${path}/__tests__/${h.changeCase.param(pluralName)}.slice.test.tsx`) || null %>
---
import { reducer, <%= h.changeCase.camel(pluralName) %>InitialState } from '../<%= h.changeCase.param(pluralName) %>.slice';

describe('<%= h.changeCase.camel(pluralName) %>Slice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual(<%= h.changeCase.camel(pluralName) %>InitialState);
  });

  it('should have "loading" property', () => {
    expect((<%= h.changeCase.camel(pluralName) %>InitialState as any).loading).toBeDefined();
  });
});
