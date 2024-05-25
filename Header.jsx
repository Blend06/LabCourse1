<<<<<<< HEAD
import React from 'react';
import styles from './styles.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <header className={`${styles.header} ${styles['d-flex']} ${styles['align-items-center']} ${styles['sticky-top']}`}>
            <div className={`${styles.container} ${styles['container-fluid']} ${styles['container-xl']} ${styles['position-relative']} ${styles['d-flex']} ${styles['align-items-center']}`}>
                <a href="index.html" className={`${styles.logo} ${styles['d-flex']} ${styles['align-items-center']} ${styles['me-auto']}`}>
                    <h1 className={styles.sitename}>AcademixPro</h1>
                </a>
                <nav className={styles.navmenu}>
                    <ul>
                        <li><a href="index.html" className={styles.active}>Home</a></li>
                        <li><a href="events.html">About Us</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="profile.html">Profile</a></li>
                    </ul>
                    <i className={`bi bi-list ${styles['mobile-nav-toggle']} ${styles['d-xl-none']}`}></i>
                </nav>
            </div>
        </header>
    );
}

export default Header;
=======
import React from 'react';
import styles from './styles.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <header className={`${styles.header} ${styles['d-flex']} ${styles['align-items-center']} ${styles['sticky-top']}`}>
            <div className={`${styles.container} ${styles['container-fluid']} ${styles['container-xl']} ${styles['position-relative']} ${styles['d-flex']} ${styles['align-items-center']}`}>
                <a href="index.html" className={`${styles.logo} ${styles['d-flex']} ${styles['align-items-center']} ${styles['me-auto']}`}>
                    <h1 className={styles.sitename}>AcademixPro</h1>
                </a>
                <nav className={styles.navmenu}>
                    <ul>
                        <li><a href="index.html" className={styles.active}>Home</a></li>
                        <li><a href="events.html">About Us</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="profile.html">Profile</a></li>
                    </ul>
                    <i className={`bi bi-list ${styles['mobile-nav-toggle']} ${styles['d-xl-none']}`}></i>
                </nav>
            </div>
        </header>
    );
}

export default Header;
>>>>>>> 3c0a315 (Add .DS_Store to .gitignore)
