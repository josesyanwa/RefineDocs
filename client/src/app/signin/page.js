"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // for navigation after successful signin
import styles from './signin.module.css';

const SignIn = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter(); // for navigation

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { email, password } = userFormData;

    if (!password) {
      setErrorMessage('Password is required');
      return;
    }

    // Sending a POST request to your Flask backend
    fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Invalid email or password');
        }
        return response.json();
      })
      .then((data) => {
        setErrorMessage(''); // clear error message on successful login
        console.log('User signed in successfully:', data);
        // Navigate to document after successful sign-in
        router.push('/document');
      })
      .catch((error) => {
        console.error('Error signing in:', error.message);
        setErrorMessage('Invalid email or password');
      });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <h2 className={styles.title}>Sign In</h2>

        {/* Email field */}
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={userFormData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Password field */}
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userFormData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Display any error message */}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

        {/* Sign In button */}
        <button type="submit" className={styles.button}>Sign In</button>

        {/* "Don't have an account? Sign up" message */}
        <p className={styles.signupText}>
          Don&apos;t have an account?{' '}
          <Link href="/signup" className={styles.signupLink}>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
