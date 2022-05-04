import { profileEditSaga } from '../profile-edit.saga';

describe('ProfileEdit saga', () => {
  let profileEditSagaIterator: ReturnType<typeof profileEditSaga>;

  beforeEach(() => {
    profileEditSagaIterator = profileEditSaga();
  });

  it('should return "ProfileEdit Saga"', () => {
    const welcomeDescriptor = profileEditSagaIterator.next();
    expect(welcomeDescriptor.value).toEqual('ProfileEdit Saga');
  });
});
