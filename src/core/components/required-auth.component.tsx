import React from 'react';
import { useAuth } from 'core/providers/auth.provider';
import { Navigate, useLocation } from 'react-router-dom';
import { SignInRoute } from 'app/sign-in/sign-in.route';

interface RequiredAuthProps {
  children: React.ReactElement;
}
export function RequiredAuthComponent({ children }: RequiredAuthProps) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return (
      <Navigate to={SignInRoute.route} state={{ from: location }} replace />
    );
  }

  return children;
}
