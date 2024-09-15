// pages/signin.js
import React from 'react';
import Link from 'next/link';
import styles from './signin.module.css';

const SignIn = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.title}>Sign In</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        {/* Add the "Don't have an account? Sign up" message */}
        <p className={styles.signupText}>
          Don&apos;t have an account?{' '}
          <Link href="/signup" className={styles.signupLink}>
            Sign up
          </Link>
        </p>

        <button type="submit" className={styles.button}>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
