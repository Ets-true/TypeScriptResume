import { createContext, FC, ReactElement, ReactNode } from 'react';

// ====== >>> Generate import store here ====== >>>
import { MobxCounterStore } from 'core/features/examples/mobx-counter/mobx-counter.store';

/**
 * For using mobx "MobX Developer Tools" browser extension
 * Chrome: https://chrome.google.com/webstore/detail/mobx-developer-tools/pfgnfdagidkfgccljigdamigbcnndkod
 * Firefox: https://addons.mozilla.org/ru/firefox/addon/mobx-devtools/
 */
let makeInspectable = (store: RootMobxStore): RootMobxStore => store;
if (process.env.NODE_ENV === 'production') {
  makeInspectable = require('mobx-devtools-mst');
}

export class RootMobxStore {
  mobxCounter: MobxCounterStore;

  constructor() {
    // ====== >>> Generate inicialize store here ====== >>>
    this.mobxCounter = new MobxCounterStore(this);
  }
}

export const MobxStoreContext = createContext<RootMobxStore>(
  {} as RootMobxStore
);

export type StoreComponent = FC<{ children: ReactNode }>;

export const MobxStoreProvider: StoreComponent = ({
  children,
}): ReactElement => {
  const store = new RootMobxStore();

  return (
    <MobxStoreContext.Provider value={makeInspectable(store) as RootMobxStore}>
      {children}
    </MobxStoreContext.Provider>
  );
};
