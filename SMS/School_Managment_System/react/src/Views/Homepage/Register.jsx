import React from 'react';
import { Link } from 'react-router-dom';
import styles from './loginregister.module.css'; 
import Footer from '../../Footer.jsx';

export default function Register() {
  return (
    <>
    <section className={styles.Register} id="Register">
          <div className={styles.wrapper}>
              <div className={`${styles.formBox} ${styles.register}`}>
                  <h2 className={styles.title2}>Registration</h2>
                  <form>
                      <div className={styles.inputBox}>
                          <span className={styles.icon}><ion-icon name="person"></ion-icon></span>
                          <input type="text" name="username" required />
                          <label>Create Username</label>
                      </div>
                      <div className={styles.inputBox}>
                          <span className={styles.icon}><ion-icon name="mail"></ion-icon></span>
                          <input type="email" name="email" required />
                          <label>Email</label>
                      </div>
                      <div className={styles.inputBox}>
                          <span className={styles.icon}><ion-icon name="lock-closed"></ion-icon></span>
                          <input type="password" name="password" required />
                          <label>Password</label>
                      </div>
                      <div className={`${styles.inputBox} ${styles.userAdmin}`} style={{ color: 'red', fontSize: '16px' }}>
                          <span className={styles.icon} style={{ marginTop: '3px' }}><ion-icon name="person-circle-outline"></ion-icon></span>
                          <select name="role" required>
                              <option value="user">Student</option>
                              <option value="user">Profesor</option>
                              <option value="admin">Drejtor</option>
                          </select>
                      </div>
                      <button type="submit" name="register-submit" className={styles.buttoniLogin}>Register</button>
                  </form>
                  <div className={styles.loginShift}>
                      <p>Back to <button className={styles.loginLink}><Link to="/login">Log in</Link></button></p>
                  </div>
              </div>
          </div>
      </section>
      <Footer />
      </>
  );
}
