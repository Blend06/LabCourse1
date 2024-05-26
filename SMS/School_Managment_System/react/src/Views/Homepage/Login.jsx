import React from 'react';
import styles from './loginregister.module.css'; // Make sure the path is correct
import Footer from '../../Footer.jsx';
import { Link } from 'react-router-dom';

export default function Login() {
    const onSubmit = (ev) => {
        ev.preventDefault()
    }
    return (
        <>
        <div>
            <section className={styles.Login} id="Login">

                <div className={styles.wrapper}>
                    <div className={`${styles.formBox} ${styles.login}`}>
                        <h2 className={styles.title1}><strong style={{color: '#ff4400'}}>Log in</strong></h2>
                        <form onSubmit={onSubmit}>
                            <div className={styles.inputBox}>
                                <span className={styles.icon}><ion-icon name="mail"></ion-icon></span>
                                <input type="email" name="email" required />
                                <label style={{color: '#ff4400'}}>Email</label>
                            </div>
                            <div className={styles.inputBox}>
                                <span className={styles.icon}>
                                    <ion-icon name="lock-closed"></ion-icon>
                                </span>
                                <input type="password" name="password" required />
                                <label style={{color: '#ff4400'}}>Password</label>
                            </div>
                            <button type="submit" name="login-submit" className={styles.buttoniLogin}>Login</button>
                        </form>
                        <div className={styles.loginRegister}>
                            <p>Don't have an account <button className={styles.registerLink} style={{background: 'none', textDecoration: 'none', border: 'none'}}>
                            <Link to ="/register">Register</Link></button></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
        </>
    );
}
