import { reducer, signUpInitialState } from '../sign-up.slice';

describe('signUpSlice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual(signUpInitialState);
  });

  it('should have "loading" property', () => {
    expect((signUpInitialState as any).loading).toBeDefined();
  });
});
