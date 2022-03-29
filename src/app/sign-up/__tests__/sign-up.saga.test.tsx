import { signUpSaga } from '../sign-up.saga';

describe('SignUp saga', () => {
  let signUpSagaIterator: ReturnType<typeof signUpSaga>;

  beforeEach(() => {
    signUpSagaIterator = signUpSaga();
  });

  it('should return "SignUp Saga"', () => {
    const welcomeDescriptor = signUpSagaIterator.next();
    expect((welcomeDescriptor.value as any).type === 'ALL').toBeTruthy();
  });
});
