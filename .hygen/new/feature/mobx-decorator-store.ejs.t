---
to: "<%= stateType === 'Mobx with decorators' ? `${path}/${h.changeCase.param(pluralName)}.store.ts` : null %>"
---
import { RootMobxStore } from 'core/state/mobx.store';
import { action, makeObservable, observable } from 'mobx';

import { fetch<%= pluralPascalName %> } from './<%= h.changeCase.param(pluralName) %>.api';
import { <%= singularPascalName %> } from './<%= h.changeCase.param(pluralName) %>.types';

export interface <%= pluralPascalName %>StoreModel {
  collection: <%= singularPascalName %>[];
}

export class <%= pluralPascalName %>Store implements <%= pluralPascalName %>StoreModel {
  private rootState: RootMobxStore;

  @observable collection: <%= singularPascalName %>[] = [];

  constructor(rootStore: RootMobxStore) {
    this.rootState = rootStore;
    makeObservable(this);
  }

  @action fetch<%= pluralPascalName %>() {
    fetch<%= pluralPascalName %>().then((<%= pluralName %>: <%= singularPascalName %>[]) => (this.collection = <%= pluralName %>));
  }
}
