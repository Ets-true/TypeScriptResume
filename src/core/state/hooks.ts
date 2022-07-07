import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootReduxState, AppDispatch } from 'core/state/redux.store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootReduxState> = useSelector;
