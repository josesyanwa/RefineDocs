import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const useAuthToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token') || Cookies.get('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const saveToken = (newToken) => {
    localStorage.setItem('token', newToken);
    Cookies.set('token', newToken, { expires: 1 });
    setToken(newToken);
  };

  const removeToken = () => {
    localStorage.removeItem('token');
    Cookies.remove('token');
    setToken(null);
  };

  return { token, saveToken, removeToken };
};