import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './loginregister.module.css'; 
import Footer from '../../Footer.jsx';
import axiosClient from '../../axios-client.js';
import { useStateContext } from '../../contexts/ContextProvider.jsx';

export default function Register() {
    const nameRef = useRef();
    const mbiemriRef = useRef();
    const moshaRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const pozitaRef = useRef();

    const {setUser, setToken} = useStateContext()

    const onSubmit = (ev) => {
        ev.preventDefault()
        const payload = {
            name: nameRef.current.value,
            mbiemri: mbiemriRef.current.value,
            mosha: moshaRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            pozita: pozitaRef.current.value
        }
        console.log(payload);
        axiosClient.post('/register', payload)
          .then(({data}) => {
            setUser(data.user)
            setToken(data.token)
          })
          .catch(err => {
            const response = err.response;
            if(response && response.status == 422) {
                console.log(response.data.errors);
            }
          })
    }
  return (
    <>
    <section className={styles.Register} id="Register">
          <div className={styles.wrapper} style={{marginTop: '200px'}}>
              <div className={`${styles.formBox} ${styles.register}`}>
                  <h2 className={styles.title2}>Registration</h2>
                  <form onSubmit={onSubmit}>
                      <div className={styles.inputBox}>
                          <span className={styles.icon}><ion-icon name="person"></ion-icon></span>
                          <input ref={nameRef} type="text" name="name" required />
                          <label>Name</label>
                      </div>
                      <div className={styles.inputBox}>
                          <span className={styles.icon}><ion-icon name="person"></ion-icon></span>
                          <input ref={mbiemriRef} type="text" name="mbiemri" required />
                          <label>Surname</label>
                      </div>
                      <div className={styles.inputBox}>
                          <span className={styles.icon}><ion-icon name="person"></ion-icon></span>
                          <input ref={moshaRef} type="number" name="mosha" required />
                          <label>Age</label>
                      </div>
                      <div className={styles.inputBox}>
                          <span className={styles.icon}><ion-icon name="mail"></ion-icon></span>
                          <input ref={emailRef} type="email" name="email" required />
                          <label>Email</label>
                      </div>
                      <div className={styles.inputBox}>
                          <span className={styles.icon}><ion-icon name="lock-closed"></ion-icon></span>
                          <input ref={passwordRef} type="password" name="password" required />
                          <label>Password</label>
                      </div>
                      <div className={`${styles.inputBox} ${styles.userAdmin}`} style={{ color: 'red', fontSize: '16px' }}>
                          <span className={styles.icon} style={{ marginTop: '3px' }}><ion-icon name="person-circle-outline"></ion-icon></span>
                          <select ref={pozitaRef} name="role" required>
                              <option value="Student">Student</option>
                              <option value="Profesor">Profesor</option>
                          </select>
                      </div>
                      <button type="submit" name="register-submit" className={styles.buttoniLogin}>Register</button>
                  </form>
                  <div className={styles.loginShift}>
                      <p>Back to <button className={styles.loginLink} style={{background: 'none', textDecoration: 'none', border: 'none'}}><Link to="/login">Log in</Link></button></p>
                  </div>
              </div>
          </div>
      </section>
      <Footer />
      </>
  );
}
