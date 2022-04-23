import React from 'react';
import { RequiredAuth } from 'core/components';
import { HomeModule } from './home.module';

export const HomeRoute = () => (
  <RequiredAuth>
    <HomeModule />
  </RequiredAuth>
);

HomeRoute.route = '/';
