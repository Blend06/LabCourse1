import React from 'react';
import heroBgImage from '../../assets/img/hero-bg.jpg';
import homepageImage from '../../assets/img/homepage2.png';
import styles from '../../styles.module.css';
import Header from '../../Header.jsx';
import Footer from '../../Footer.jsx';


export default function Homepage() {
    return (
        <>
        <Header/>
        <main className={styles.main}>
            <section id="hero" className={`${styles.hero} ${styles.section}`}>
                <img src={heroBgImage} alt="Hero Background" className={styles.heroImage}/>
                <div className={`${styles.container} ${styles.heroTextContainer}`}>
                    <h2 className={styles.heroTitle}>Learning Today,<br />Leading Tomorrow</h2>
                    <p className={styles.heroDescription}>Academix Pro offers a comprehensive and intuitive school management solution designed to streamline administrative tasks and enhance the overall educational experience.</p>
                    <div className="d-flex mt-4">
                    </div>
                </div>
            </section>
            <div className="container text-center mb-4">
                <h1 className="section-title mb-0 mt-4">Get started with<strong style={{ fontWeight: 'bold', color: '#FF4400' }}> Academix Pro</strong></h1>
            </div>
            <div className="container">
                <div className="tab-content-container" id="content-tabs">
                    <div className="tab-pane active-tab" id="tab-home" role="tabpanel" aria-labelledby="tab-home-tab">
                        <div className="row">
                            <div className="col-lg-7 col-12">
                                <img src={homepageImage} className="content-image img-fluid" style={{ width: '580px', height: '400px', marginLeft: '50px', marginBottom: '40px' }} alt="Home Page" />
                            </div>
                            <div className="col-lg-5 col-12">
                                <div style={{ marginTop: '70px' }}>
                                    <p className="content-text">Empowering educational institutions worldwide, <strong style={{ color: '#FF4400' }}>AcademixPro</strong> simplifies administrative tasks, enhances communication between stakeholders, and enriches the learning experience.</p>
                                    <p>With <strong style={{ color: '#FF4400' }}>Academix Pro</strong>, educators can focus more on teaching and less on paperwork, as the platform automates routine tasks such as attendance tracking, grade management, and communication with students and parents.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    )
}