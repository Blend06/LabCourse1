import React from 'react';
import styles from './styles.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className={styles.footer} style={{ backgroundColor: '#2b2b2b' }}>
            <div className={styles.container}>
                <div className={`${styles.row} ${styles.justifyContentBetween}`} style={{paddingTop: '30px'}}>
                    <div className={`${styles.colLg4} ${styles.colMd6} ${styles.footerAbout}`}>
                            <span className={styles.sitename} style={{ color: '#FF4400' }}>AcademixPro</span>
                        <div className={`${styles.footerContact} ${styles.pt3}`}>
                            <p>Prishtina, 10000</p>
                            <p className={styles.mt3}><strong>Phone:</strong> <span>+383 44 888 999</span></p>
                            <p><strong>Email:</strong> <span>info@academix-sms.com</span></p>
                        </div>
                    </div>
                    <div className={`${styles.colLg4} ${styles.colMd6} ${styles.footerLinks}`}>
                        <h4 style={{ color: '#FF4400' }}>Useful Links</h4>
                        <ul style={{ marginLeft: '180px' }}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/contact">Terms of services</Link></li>
                            <li><Link to="/aboutus">Privacy policy</Link></li>
                        </ul>
                    </div>
                    <div className={`${styles.colLg4} ${styles.colMd12} ${styles.footerNewsletter}`}>
                        <h4 style={{ color: '#FF4400' }}>Our Links</h4>
                        <div className={`${styles.socialLinks} ${styles.dFlex} ${styles.flexColumn} ${styles.mt4}`} style={{display: 'flex', flexDirection: 'column', gap: '20px', color: 'white'}}>
                            <a href="https://x.com/" className={styles.mb2}><i className="bi bi-twitter" style={{ fontSize: '30px' }}></i></a>
                            <a href="https://www.facebook.com/" className={styles.mb2}><i className="bi bi-facebook" style={{ fontSize: '30px' }}></i></a>
                            <a href="https://www.instagram.com/" className={styles.mb2}><i className="bi bi-instagram" style={{ fontSize: '30px' }}></i></a>
                            <a href="https://www.linkedin.com/"><i className="bi bi-linkedin" style={{ fontSize: '30px' }}></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={`${styles.col} ${styles.textCenter}`} style={{ marginTop: '20px' }}>
                        <p>©<span>Copyright</span> <strong className={`${styles.px1} ${styles.sitename}`}>2024 AcademixPro</strong> <span>All Rights Reserved</span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
