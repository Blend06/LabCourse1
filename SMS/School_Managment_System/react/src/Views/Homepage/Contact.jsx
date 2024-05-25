import React from 'react';
import styles from '../../styles.module.css';
import Header from '../../Header.jsx';
import Footer from '../../Footer.jsx';

export default function Contact() {
    return (
        <>
        <Header/>
        <main className="main">
            <section id="contact" className="contact section">
                <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
                    <iframe style={{ border: 0, width: '100%', height: 300 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.252848833522!2d21.14850531550427!3d42.66285817915752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549f6a3e1b3e1b%3A0x5e8a8e55b9a8a1e2!2sPrishtina!5e0!3m2!1sen!2sus!4v1676962216455!5m2!1sen!2sus" frameborder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">
                        <div className="col-lg-4" style={{ display: 'flex', alignItems: 'space-between', gap: '490px' }}>
                            <div className=" align-items-center info-item" data-aos="fade-up" data-aos-delay="300">
                                <i className="bi bi-geo-alt flex-shrink-0" style={{ color: '#ffffff', backgroundColor: '#FF4400', fontSize: '20px', width: '48px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50px', transition: 'all 0.3s ease-in-out', marginRight: '15px' }}></i>
                                <div>
                                    <h3 style={{ padding: 0, fontSize: '18px', fontWeight: 700, marginBottom: '5px' }}>Address</h3>
                                    <p style={{ padding: 0, marginBottom: 0 }}>Prishtina, 10000</p>
                                </div>
                            </div>
                            <div className="align-items-center info-item" data-aos="fade-up" data-aos-delay="400">
                                <i className="bi bi-telephone flex-shrink-0" style={{ color: '#ffffff', backgroundColor: '#FF4400', fontSize: '20px', width: '48px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50px', transition: 'all 0.3s ease-in-out', marginRight: '15px' }}></i>
                                <div>
                                    <h3 style={{ padding: 0, fontSize: '18px', fontWeight: 700, marginBottom: '5px' }}>Call Us</h3>
                                    <p style={{ padding: 0, marginBottom: 0 }}>+383 44 888 999</p>
                                </div>
                            </div>
                            <div className=" align-items-center info-item" data-aos="fade-up" data-aos-delay="500">
                                <i className="bi bi-envelope flex-shrink-0" style={{ color: '#ffffff', backgroundColor: '#FF4400', fontSize: '20px', width: '48px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50px', transition: 'all 0.3s ease-in-out', marginRight: '15px' }}></i>
                                <div>
                                    <h3 style={{ padding: 0, fontSize: '18px', fontWeight: 700, marginBottom: '5px' }}>Email Us</h3>
                                    <p style={{ padding: 0, marginBottom: 0 }}>info@academix-sms.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    );
}
