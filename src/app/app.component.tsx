import { Navigate, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';

import { startAppActoin } from './app.slice';
import { selectAuthLoading } from './app.selectors';
import { useAppDispatch, useAppSelector } from 'core/state/hooks';

import { SignIn } from './sign-in';
import { SignUp } from './sign-up';
import { HomePage } from './home/home.page';

import { HomeRoute } from './home';
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
        <Route path={SignIn.route} element={<SignIn />} />
        <Route path={SignUp.route} element={<SignUp />} />

        {/* Protected routes */}
        <Route element={<Layout />}>
          <Route path={HomePage.route} element={<HomeRoute />} />
        </Route>

        <Route path="*" element={<Navigate to={HomePage.route} />} />
      </Routes>
    </AuthProvider>
  );
}
