import { Navigate, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';

import { SignInRoute } from './sign-in/sign-in.route';
import { SignUpRoute } from './sign-up/sign-up.route';
import { HomeRoute } from './home';

import { startAppActoin } from './app.slice';
import { selectAuthLoading } from './app.selectors';
import { useAppDispatch, useAppSelector } from 'core/state/hooks';

import { StartLoader } from './components/start-loader';
import { AuthProvider } from 'core/providers/auth.provider';
import { Layout } from './components/layout';

export function AppComponent() {
  const dispatch = useAppDispatch();
  const authLoading = useAppSelector(selectAuthLoading);

  useEffect(() => {
    dispatch(startAppActoin());
  }, []);

  if (authLoading) {
    return <StartLoader show={authLoading} />;
  }

  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          {/* Public routes */}
          <Route path={SignInRoute.route} element={<SignInRoute />} />
          <Route path={SignUpRoute.route} element={<SignUpRoute />} />

          {/* Protected routes */}
          <Route path={HomeRoute.route} element={<HomeRoute />} />
        </Route>

        <Route path="*" element={<Navigate to={HomeRoute.route} />} />
      </Routes>
    </AuthProvider>
  );
}
