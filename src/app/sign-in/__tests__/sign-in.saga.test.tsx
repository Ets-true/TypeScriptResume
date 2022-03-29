import { signInSaga } from '../sign-in.saga';

describe('SignIn saga', () => {
  let signInSagaIterator: ReturnType<typeof signInSaga>;

  beforeEach(() => {
    signInSagaIterator = signInSaga();
  });

  it('should return "SignIn Saga"', () => {
    const welcomeDescriptor = signInSagaIterator.next();
    expect((welcomeDescriptor.value as any).type === 'ALL').toBeTruthy();
  });
});
