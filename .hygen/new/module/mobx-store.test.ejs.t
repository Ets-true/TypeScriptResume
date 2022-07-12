---
to: "<%= stateType !== 'Redux' ? `${path}/__tests__/${h.changeCase.param(pluralName)}.store.test.ts` : null %>"
---

import { RootMobxStore } from 'core/state/mobx.store';
import { <%= pascalName %>Store } from '../<%= pascalName %>.store';

describe('<%= pascalName %> Store', () => {
  let rootStore: RootMobxStore;

  beforeEach(() => {
    rootStore = new RootMobxStore();
  });

  it('should have rootStore', () => {
    const store = new <%= pascalName %>Store(rootStore);
    expect(store).toBeDefined();
  });
});
