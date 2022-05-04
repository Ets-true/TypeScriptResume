import React from 'react';
import { RequiredAuth } from 'core/components';
import { Profile } from '.';

export const ProfileRoute = () => (
  <RequiredAuth>
    <Profile />
  </RequiredAuth>
);

ProfileRoute.route = '/:login';
