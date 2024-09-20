// pages/SignUp.js
import React from 'react';
import Link from 'next/link';
import styles from './SignUp.module.css';

const SignUp = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.title}>Sign Up</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        {/* Add the "Don't have an account? Sign up" message */}
        <p className={styles.signupText}>
          Already have an account?{' '}
          <Link href="/signin" className={styles.signupLink}>
            Sign in
          </Link>
        </p>

        <button type="submit" className={styles.button}>Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
