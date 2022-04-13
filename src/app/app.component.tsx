import React, { useEffect } from 'react';

import { startAppActoin } from './app.slice';
import { useAppDispatch, useAppSelector } from 'core/state/hooks';
import { selectShowAuthLoader, selectUser } from './app.selectors';

import AuthApp from './auth-app';
import UnauthApp from './unauth-app';

import { StartLoader } from './components/start-loader';

export function AppComponent() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const showAuthLoader = useAppSelector(selectShowAuthLoader);

  useEffect(() => {
    dispatch(startAppActoin());
  }, []);

  return (
    <>
      <StartLoader show={showAuthLoader} />
      {(user && <AuthApp />) || <UnauthApp />}
    </>
  );
}
