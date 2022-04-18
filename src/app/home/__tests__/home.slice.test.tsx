import { reducer, homeInitialState } from '../home.slice';

describe('homeSlice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual(homeInitialState);
  });

  it('should have "loading" property', () => {
    expect((homeInitialState as any).loading).toBeDefined();
  });
});
