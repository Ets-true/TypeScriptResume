import React from 'react';
import { useAuth } from 'core/providers/auth.provider';
import { Navigate, useLocation } from 'react-router-dom';
import { SignIn } from 'app/sign-in';

interface RequiredAuthProps {
  children: React.ReactElement;
}
export function RequiredAuthComponent({ children }: RequiredAuthProps) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to={SignIn.route} state={{ from: location }} replace />;
  }

  return children;
}
