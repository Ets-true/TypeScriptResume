---
to: "<%= stateType === 'Default Mobx' ? `${path}/${h.changeCase.param(pluralName)}.store.ts` : null %>"
---
import { RootMobxStore } from 'core/state/mobx.store';
import { makeAutoObservable } from 'mobx';

import { fetch<%= pluralPascalName %> } from './<%= pluralName %>.api';
import { <%= singularPascalName %> } from './<%= pluralName %>.types';

export interface <%= pluralPascalName %>StoreModel {
  collection: <%= singularPascalName %>[];
}

export class <%= pluralPascalName %>Store implements <%= pluralPascalName %>StoreModel {
  private rootState: RootMobxStore;

  collection: <%= singularPascalName %>[] = [];

  constructor(rootStore: RootMobxStore) {
    this.rootState = rootStore;
    makeAutoObservable(this);
  }

  fetch<%= pluralPascalName %>() {
    fetch<%= pluralPascalName %>().then((<%= pluralName %>: <%= singularPascalName %>[]) => (this.collection = <%= pluralName %>));
  }
}
