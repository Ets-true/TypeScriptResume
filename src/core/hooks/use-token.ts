import { useEffect, useState } from 'react';

export const setStorageToken = (t: string) => localStorage.setItem('token', t);
export const getStorageToken = () => localStorage.getItem('token') || '';
export const removeStorageToken = () => localStorage.removeItem('token');

export function useToken() {
  const [token, setToken] = useState<string>('');
  const storageToken = getStorageToken();

  useEffect(() => {
    if (storageToken) {
      setToken(storageToken);
    } else {
      setToken('');
    }
  }, [storageToken]);

  return token;
}
