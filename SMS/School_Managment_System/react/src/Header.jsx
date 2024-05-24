import React from 'react';
import styles from './styles.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={`${styles.header} ${styles['d-flex']} ${styles['align-items-center']} ${styles['sticky-top']}`}>
            <div className={`${styles.container} ${styles['container-fluid']} ${styles['container-xl']} ${styles['position-relative']} ${styles['d-flex']} ${styles['align-items-center']}`}>
            <div className={`${styles.logo} ${styles['d-flex']} ${styles['align-items-center']} ${styles['me-auto']}`}>
                    <h1 className={styles.sitename}>AcademixPro</h1>
                </div>
                <nav className={styles.navmenu}>
                    <ul>
                        <li><Link to="/" className={styles.active}>Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/dashboard">Profile</Link></li>
                    </ul>
                    <i className={`bi bi-list ${styles['mobile-nav-toggle']} ${styles['d-xl-none']}`}></i>
                </nav>
            </div>
        </header>
    );
}

export default Header;
