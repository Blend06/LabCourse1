import React from 'react';
import styles from './dashboard.module.css';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return  (
       <>
       <div className={styles.body}>
        <div className={styles.mainContent}>
            <nav className={styles.sidebar}>
                <div className={styles['menu-bar']}>
                    <div className={styles.menu}>
                        <li className={styles['nav-links']}>
                            <i className='bx bx-home-alt' style={{ color: 'var(--primary-color)' }}></i>
                            <span className={styles['nav-text']} style={{ color: 'var(--primary-color)' }}>Dashboard</span>
                        </li>
                        <ul className={styles['menu-links']}>
                            <li className={styles['nav-links']}>
                                <a href="#">Nxenesit</a>
                            </li>
                            <li className={styles['nav-links']}>
                                <a href="#">Profesoret</a>
                            </li>
                            <li className={styles['nav-links']}>
                                <a href="#">Lendet</a>
                            </li>
                            <li className={styles['nav-links']}>
                                <a href="#">Orari</a>
                            </li>
                            <li className={styles['nav-links']}>
                                <a href="#">Klasat</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles['bottom-content']}>
                        <li className={styles['nav-links-return']}>
                            <i className='bx bx-log-out' style={{ color: 'var(--primary-color)' }}></i>
                            <Link to="/">Return to homepage</Link>
                        </li>
                        <a href="#">Log-out</a>
                    </div>
                </div>
            </nav>
        </div>
        </div>
        </>
    );
}

