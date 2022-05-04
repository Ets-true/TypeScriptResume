import { profileSaga } from '../profile.saga';

describe('Profile saga', () => {
  let profileSagaIterator: ReturnType<typeof profileSaga>;

  beforeEach(() => {
    profileSagaIterator = profileSaga();
  });

  it('should return "Profile Saga"', () => {
    const welcomeDescriptor = profileSagaIterator.next();
    expect(welcomeDescriptor.value).toEqual('Profile Saga');
  });
});
