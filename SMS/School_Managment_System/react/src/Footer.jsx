import React from 'react';
import styles from './styles.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
function Footer() {
    return (
        <footer className={styles.footer} style={{ backgroundColor: '#2b2b2b' }}>
            <div className={styles.container}>
                <div className={`${styles.row} ${styles.justifyContentBetween}`}>
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
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Terms of service</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.colLg4} ${styles.colMd12} ${styles.footerNewsletter}`}>
                        <h4 style={{ color: '#FF4400' }}>Our Links</h4>
                        <div className={`${styles.socialLinks} ${styles.dFlex} ${styles.flexColumn} ${styles.mt4}`}>
                            <a href="#" className={styles.mb2}><i className="bi bi-twitter" style={{ fontSize: '30px' }}></i></a>
                            <a href="#" className={styles.mb2}><i className="bi bi-facebook" style={{ fontSize: '30px' }}></i></a>
                            <a href="#" className={styles.mb2}><i className="bi bi-instagram" style={{ fontSize: '30px' }}></i></a>
                            <a href="#"><i className="bi bi-linkedin" style={{ fontSize: '30px' }}></i></a>
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
