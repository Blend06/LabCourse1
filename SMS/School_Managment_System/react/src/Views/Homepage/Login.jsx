import React from 'react';
import styles from './loginregister.module.css'; // Make sure the path is correct

export default function Login() {
    return (
        <div>
            <section className={styles.Login} id="Login">

                <div className={styles.wrapper}>
                    <div className={`${styles.formBox} ${styles.login}`}>
                        <h2 className={styles.title1}>Log in</h2>
                        <form>
                            <div className={styles.inputBox}>
                                <span className={styles.icon}><ion-icon name="mail"></ion-icon></span>
                                <input type="email" name="username" required />
                                <label>Email</label>
                            </div>
                            <div className={styles.inputBox}>
                                <span className={styles.icon}>
                                    <ion-icon name="lock-closed"></ion-icon>
                                </span>
                                <input type="password" name="password" required />
                                <label>Password</label>
                            </div>
                            <button type="submit" name="login-submit" className={styles.buttoniLogin}>Login</button>
                        </form>
                        <div className={styles.loginRegister}>
                            <p>Don't have an account <button className={styles.registerLink}>Register</button></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
