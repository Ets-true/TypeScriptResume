---
to: "<%= stateType === 'Default Mobx' ? `src/${moduleMobxStorePath}.ts` : null %>"
---
import { RootMobxStore } from 'core/state/mobx.store';
import { makeAutoObservable } from 'mobx';

export interface <%= pascalName %>StoreModel {}

export class <%= pascalName %>Store implements <%= pascalName %>StoreModel {
  private rootState: RootMobxStore;

  constructor(rootStore: RootMobxStore) {
    this.rootState = rootStore;
    makeAutoObservable(this);
  }
}
