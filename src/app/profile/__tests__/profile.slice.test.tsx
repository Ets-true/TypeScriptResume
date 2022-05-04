import { reducer, profileInitialState } from '../profile.slice';

describe('profileSlice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual(profileInitialState);
  });

  it('should have "loading" property', () => {
    expect((profileInitialState as any).loading).toBeDefined();
  });
});
