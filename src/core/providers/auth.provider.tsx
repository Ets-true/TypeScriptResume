import { selectUser } from 'app/app.selectors';
import { User } from 'core/features/users/users.constants';
import { useAppSelector } from 'core/state/hooks';
import React from 'react';

export const useAuth = () => React.useContext(AuthContext);

interface AuthContextType {
  user: User | null;
}
const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const user = useAppSelector(selectUser);
  const value: AuthContextType = { user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
