---
to: "<%= stateType === 'Redux' ? `${path}/__tests__/${kebabName}.saga.test.tsx` : null %>"
---
import { <%= camelName %>Saga } from '../<%= kebabName %>.saga';

describe('<%= moduleName %> saga', () => {
  let <%= camelName %>SagaIterator: ReturnType<typeof <%= camelName %>Saga>;

  beforeEach(() => {
    <%= camelName %>SagaIterator = <%= camelName %>Saga();
  });

  it('should return "<%= moduleName %> Saga"', () => {
    const welcomeDescriptor = <%= camelName %>SagaIterator.next();
    expect(welcomeDescriptor.value).toEqual('<%= moduleName %> Saga');
  });
});