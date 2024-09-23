import { useEffect, useState } from 'react';

export const useCheckSession = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('JWT'); // Get JWT from localStorage

    if (token) {
      // Fetch the session check endpoint
      fetch('http://127.0.0.1:5555/check_session', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Session check failed');
          }
          return response.json();
        })
        .then(data => {
          setUser(data.user); // Set the user data
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setLoading(false); // No token, no need to fetch
    }
  }, []);

  return { user, loading, error };
};
