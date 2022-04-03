import React, { useEffect } from 'react';

import { selectUser } from './app.selectors';
import { startAppActoin } from './app.slice';
import { useAppDispatch, useAppSelector } from 'core/state/hooks';

import UnauthApp from './unauth-app';
import AuthApp from './auth-app';

export function AppComponent() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startAppActoin());
  }, []);

  return (user && <AuthApp />) || <UnauthApp />;
}
