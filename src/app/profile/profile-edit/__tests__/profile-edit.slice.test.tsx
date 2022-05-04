import { reducer, profileEditInitialState } from '../profile-edit.slice';

describe('profileEditSlice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual(profileEditInitialState);
  });

  it('should have "loading" property', () => {
    expect((profileEditInitialState as any).loading).toBeDefined();
  });
});
