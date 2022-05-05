---
to: <%= path %>/__tests__/<%= h.changeCase.param(pluralName) %>.saga.test.tsx
---
import { <%= h.changeCase.param(pluralName) %>Saga } from '../<%= h.changeCase.param(pluralName) %>.saga';

describe('<%= h.changeCase.param(pluralName) %> saga', () => {
  let <%= h.changeCase.param(pluralName) %>SagaIterator: ReturnType<typeof <%= h.changeCase.param(pluralName) %>Saga>;

  beforeEach(() => {
    <%= h.changeCase.param(pluralName) %>SagaIterator = <%= h.changeCase.param(pluralName) %>Saga();
  });

  it('should return "<%= pluralName %> saga"', () => {
    const welcomeDescriptor = <%= h.changeCase.param(pluralName) %>SagaIterator.next();
    expect((welcomeDescriptor.value as any).type === 'ALL').toBeTruthy();
  });
});