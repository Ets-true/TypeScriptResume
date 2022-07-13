---
to: "<%= stateType === 'Mobx with decorators' ? `src/${moduleMobxStorePath}.ts` : null %>"
---
import { RootMobxStore } from 'core/state/mobx.store';
import { makeObservable } from 'mobx';

export interface <%= pascalName %>StoreModel {}

export class <%= pascalName %>Store implements <%= pascalName %>StoreModel {
  private rootState: RootMobxStore;

  constructor(rootStore: RootMobxStore) {
    this.rootState = rootStore;
    makeObservable(this);
  }
}
