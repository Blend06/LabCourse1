<<<<<<< HEAD
import React from 'react';
import heroBgImage from './assets/img/hero-bg.jpg';
import homepageImage from './assets/img/homepage2.png';
import styles from './styles.module.css';

function Body() {
    return (
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
    );
}

export default Body;
=======
import React from 'react';
import heroBgImage from './assets/img/hero-bg.jpg';
import vid from './assets/img/vid.mp4'; // Import the video file
import styles from './styles.module.css';

function Body() {
    return (
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
            
            {/* New Section with Background Image */}
            <section className={`${styles.newSection} ${styles.section} ${styles.backgroundImageSection}`}>
                <div className="container text-center mb-4">
                    <h1 className="section-title mb-0 mt-4">Get started with<strong style={{ fontWeight: 'bold', color: '#FF4400', }}> Academix Pro</strong></h1>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-6 col-12 col-lg-offset-1"> {/* Adjust column size */}
    <video autoPlay controls={false} className="content-video" style={{ width: '100%', height: 'auto', marginBottom: '20px', marginRight: '100px' }}>
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</div>




                        <div className="col-lg-5 col-12">
                            <div className={styles.textContainer}>
                                <p className={styles.contentText}>Nese deshironi qe endrrat e juaja te behen realitet shkolla jone, <strong className={styles.highlight}>AcademixPro</strong> thjeshteson edukimin individual ne menyra atraktive</p>
                                <p className={styles.contentText}>Me<strong className={styles.highlight}> Academix Pro</strong>,do te shijoni kenaqesite e dijes dhe arritjen e qellimeve tuaja , per suksesin tend , vrapo edhe ti.
                                𝚁̲𝚎̲𝚐̲𝚒̲𝚜̲𝚝̲𝚎̲𝚛̲ ̲𝚗̲𝚘̲𝚠̲</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Body;
>>>>>>> 3c0a315 (Add .DS_Store to .gitignore)
