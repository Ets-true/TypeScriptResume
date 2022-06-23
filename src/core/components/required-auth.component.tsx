import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from 'core/providers/auth.provider';
import { SignInRoute } from 'app/sign-in/sign-in.route';
import { isRequiredAuth } from 'core/helpers/is-required-auth';

interface RequiredAuthProps {
  children: React.ReactElement;
}
export function RequiredAuthComponent({ children }: RequiredAuthProps) {
  const auth = useAuth();
  const location = useLocation();

  // REACT_APP_AUTH_REQUIRED="false"
  if (!isRequiredAuth()) {
    return children;
  }

  if (!auth.user) {
    return (
      <Navigate to={SignInRoute.route} state={{ from: location }} replace />
    );
  }

  return children;
}
