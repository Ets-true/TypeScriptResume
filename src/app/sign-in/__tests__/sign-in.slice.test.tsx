import { reducer, signInInitialState } from '../sign-in.slice';

describe('signInSlice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual(signInInitialState);
  });

  it('should have "loading" property', () => {
    expect((signInInitialState as any).loading).toBeDefined();
  });
});
