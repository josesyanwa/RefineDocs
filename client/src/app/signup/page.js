// src/app/SignUp.js
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Next.js router hook for navigation
import styles from './SignUp.module.css';

const SignUp = () => {
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter(); // for navigating after successful signup

  const handleUserChange = (event) => {
    const { name, value } = event.target;
    setUserFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();

    const { username, email, password } = userFormData;
    const data = { username, email, password };

    if (!data.password) {
      setErrorMessage('Password is required');
      return;
    }

    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 409) {
            setErrorMessage('Username or email already exists');
            return;
          }
          throw new Error('Error registering user: ' + response.status);
        }
        setErrorMessage('');
        console.log('User sign up successful!');
        router.push('/'); // Navigate to home page or another page after successful signup
      })
      .catch((error) => {
        console.error('Error registering user:', error.message);
        setErrorMessage('Error registering user: ' + error.message);
      });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleUserSubmit}>
        <h2 className={styles.title}>Sign Up</h2>

        {/* Username field */}
        <div className={styles.inputGroup}>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userFormData.username}
            onChange={handleUserChange}
            required
          />
        </div>

        {/* Email field */}
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userFormData.email}
            onChange={handleUserChange}
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
            onChange={handleUserChange}
            required
          />
        </div>

        {/* Display any error message */}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

        {/* Submit button */}
        <button type="submit" className={styles.button}>
          Sign up
        </button>

        {/* Sign in link */}
        <p className={styles.signupText}>
          Already have an account?{' '}
          <Link href="/signin" className={styles.signupLink}>
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
