import { MobxStoreContext, RootMobxStore } from 'core/state/mobx.store';
import { useContext } from 'react';

export const useMobxStores = () => useContext<RootMobxStore>(MobxStoreContext);
