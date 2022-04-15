import { homeSaga } from '../home.saga';

describe('Home saga', () => {
  let homeSagaIterator: ReturnType<typeof homeSaga>;

  beforeEach(() => {
    homeSagaIterator = homeSaga();
  });

  it('should return "Home Saga"', () => {
    const welcomeDescriptor = homeSagaIterator.next();
    expect(welcomeDescriptor.value).toEqual('Home Saga');
  });
});
