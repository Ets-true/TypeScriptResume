import React from 'react';
import { RequiredAuth } from 'core/components';
import { HomePage } from './home.page';

export const HomeRoute = () => (
  <RequiredAuth>
    <HomePage />
  </RequiredAuth>
);

HomeRoute.route = '/';
