import { observable } from 'mobx';
import { RootMobxStore } from 'core/state/mobx-store';

export interface MobxCounterStoreInterface {
  value: number;
}

class MobxCounterStore implements MobxCounterStoreInterface {
  private rootState?: RootMobxStore;

  @observable value = 0;

  constructor(rootStore?: RootMobxStore) {
    this.rootState = rootStore;
  }
}

export default new MobxCounterStore();
