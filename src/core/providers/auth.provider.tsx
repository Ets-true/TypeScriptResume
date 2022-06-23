import { selectUser } from 'app/app.selectors';
import React, { useState } from 'react';
import { User } from 'core/features/users/users.constants';
import { actions } from 'app/app.slice';
import { useAppDispatch, useAppSelector } from 'core/state/hooks';
import { removeStorageToken } from 'core/hooks/use-token';

export const useAuth = () => React.useContext(AuthContext);

interface AuthContextType {
  user: User | null;
  signed: boolean;
  signOut(): void;
}
const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signed, setSigned] = useState<boolean>(true);

  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(actions.updateUser());
    setSigned(false);
    removeStorageToken();
  };

  const value: AuthContextType = { user, signOut, signed };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
