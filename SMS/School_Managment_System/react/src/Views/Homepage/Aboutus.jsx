import img from '../../assets/img/aboutus.jpg';
import React from 'react';
import styles from '../../styles.module.css';
import Header from '../../Header.jsx';
import Footer from '../../Footer.jsx';
export default function Aboutus(){
    return (
        <>
        <Header/>
        <div className={styles.aboutusimg}>
        <section id="about-us" className={`${styles.aboutUs} ${styles.section}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 text-center">
                        <h2 className={styles.aboutUsTitle}>ABOUT US</h2>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <p className={styles.aboutUsDescription}>
                        <strong style={{color: '#ff4400'}}>AcademixPro</strong>  is a comprehensive school management system designed to streamline and enhance the 
                        administrative and educational processes within academic institutions. This innovative software provides
                         a centralized platform for managing various aspects of school operations, including student enrollment, 
                          scheduling, and communication.
                        </p>
                        <p className={styles.aboutUsDescription}>
                        In addition to its core functionalities, <strong style={{color: '#ff4400'}}>AcademixPro</strong>  offers a range of customizable options to cater to
                         the unique needs of different schools. Institutions can tailor the system to align with their specific
                          administrative processes, academic requirements, and policy frameworks.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.imageContainer}>
                            <img src={img} alt="About Us" className={styles.image} style={{ width: '730px', height: '680px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        <Footer/>
        </>
    )
}