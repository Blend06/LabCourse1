import React from 'react';
import img from './assets/img/shkolla.jpg'; // Import the image file
import styles from './styles.module.css';

function AboutUs() {
    return (
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
                            Shkolla jone ka nje eksperience te madhe , duke filluar me mesim qe nga viti 1851 me drejtues te pare 
                            te asaj kohe Filan Fiseteku, shkolla ka qene nje objekt i vogel me pak klasa, por krahas kushteve suksesi
                            nuk mungoi asnjeher.
                        </p>
                        <p className={styles.aboutUsDescription}>
                            Qe nga viti 1851 e deri me tani shkolla improvizohet cdo dite, qofte ne aspektin e kushteve, qofte
                            ne aspektin e intelektit dhe dijes.Qellimi yne si shkolle eshte qe te mundesojme arritjen e qellimeve
                            nga gjithsecili nxenes ne qfare do lloj zhanri qe ata aspirojne.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.imageContainer}>
                            <img src={img} alt="About Us" className={styles.image} style={{ width: '800px', height: 'auto' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
