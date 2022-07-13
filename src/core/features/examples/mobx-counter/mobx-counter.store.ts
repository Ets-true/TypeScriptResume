import { RootMobxStore } from 'core/state/mobx.store';
import { action, makeObservable, observable } from 'mobx';

export interface MobxCounterStoreModel {
  value: number;

  increment(): void;
  decrement(): void;
}

export class MobxCounterStore implements MobxCounterStoreModel {
  private rootState: RootMobxStore;

  @observable value = 0;

  constructor(rootStore: RootMobxStore) {
    this.rootState = rootStore;
    makeObservable(this);
  }

  @action increment() {
    this.value = this.value + 1;
  }

  @action decrement() {
    this.value = this.value - 1;
  }
}
