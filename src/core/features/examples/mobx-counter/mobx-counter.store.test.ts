import { RootMobxStore } from 'core/state/mobx.store';
import { MobxCounterStore } from './mobx-counter.store';

describe('MobxCounter Store', () => {
  let rootStore: RootMobxStore;

  beforeEach(() => {
    rootStore = new RootMobxStore();
  });

  it('should have rootStore', () => {
    const counterStore = new MobxCounterStore(rootStore);
    expect(counterStore).toBeDefined();
  });
});
