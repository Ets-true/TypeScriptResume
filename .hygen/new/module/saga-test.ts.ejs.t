---
to: <%= path %>/__tests__/<%= kebab_name %>.saga.test.tsx
---
import { <%= camel_name %>Saga } from '../<%= kebab_name %>.saga';

describe('<%= module_name %> saga', () => {
  let <%= camel_name %>SagaIterator: ReturnType<typeof <%= camel_name %>Saga>;

  beforeEach(() => {
    <%= camel_name %>SagaIterator = <%= camel_name %>Saga();
  });

  it('should return "<%= module_name %> Saga"', () => {
    const welcomeDescriptor = <%= camel_name %>SagaIterator.next();
    expect(welcomeDescriptor.value).toEqual('<%= module_name %> Saga');
  });
});