import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { HomeRoute } from './home';
import { SignInRoute } from './sign-in/sign-in.route';
import { SignUpRoute } from './sign-up/sign-up.route';
import { ProfileRoute } from 'app/profile/profile.route';
import { ProfileEditRoute } from 'app/profile/profile-edit/profile-edit.route';

import { startAppActoin } from './app.slice';
import { selectAuthLoading } from './app.selectors';
import { useAppDispatch, useAppSelector } from 'core/state/hooks';

import { Layout } from './components/layout';
import { StartLoader } from './components/start-loader';
import { AuthProvider } from 'core/providers/auth.provider';
import { isRequiredAuth } from 'core/helpers/is-required-auth';

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
          {isRequiredAuth() && [
            <Route path={SignInRoute.route} element={<SignInRoute />} />,
            <Route path={SignUpRoute.route} element={<SignUpRoute />} />,
          ]}

          {/* Protected routes */}
          <Route path={HomeRoute.route} element={<HomeRoute />} />
          <Route path={ProfileRoute.route} element={<ProfileRoute />} />
          <Route path={ProfileEditRoute.route} element={<ProfileEditRoute />} />
        </Route>
        <Route path="*" element={<Navigate to={HomeRoute.route} />} />
      </Routes>
    </AuthProvider>
  );
}
