import React from 'react';

import { ProfileEdit } from '.';
import { RequiredAuth } from 'core/components';

export const ProfileEditRoute = () => (
  <RequiredAuth>
    <ProfileEdit />
  </RequiredAuth>
);

ProfileEditRoute.route = '/:login/edit';
