import { selectToken } from 'app/app.selectors';
import { useAppSelector } from 'core/state/hooks';
import { useEffect, useState } from 'react';

export const setStorageToken = (t: string) => localStorage.setItem('token', t);
export const getStorageToken = () => localStorage.getItem('token') || '';

export function useToken() {
  const [token, setToken] = useState<string>('');
  const reduxToken = useAppSelector(selectToken);
  const storageToken = getStorageToken();

  useEffect(() => {
    if (reduxToken) {
      setToken(reduxToken);
    } else if (storageToken) {
      setToken(storageToken);
    } else {
      setToken('');
    }
  }, [reduxToken, storageToken]);

  return token;
}
