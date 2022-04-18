import { selectUser } from 'app/app.selectors';
import React from 'react';
import { User } from 'core/features/users/users.constants';
import { actions } from 'app/app.slice';
import { useAppDispatch, useAppSelector } from 'core/state/hooks';
import { removeStorageToken } from 'core/hooks/use-token';

export const useAuth = () => React.useContext(AuthContext);

interface AuthContextType {
  user: User | null;
  signOut(): void;
}
const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(actions.updateUser());
    removeStorageToken();
  };

  const value: AuthContextType = { user, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
