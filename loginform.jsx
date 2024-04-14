import React, { useState } from 'react';
import './logstil.css'; // Make sure to import your CSS file

function LoginForm() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <input type="checkbox" id="toggle-form" checked={showLogin} style={{ display: 'none' }} />
      <label htmlFor="toggle-form" className="toggle-label"></label>

      <section className="Login" id="Login" style={{ display: showLogin ? 'block' : 'none' }}>
        <h5 className="heading"> pjesa hederit nese e nevojshme </h5>

        <div className="wrapper">
          <div className="form-box login">
            <h2 className="title1">Log in</h2>
            <form action="login_process.php" method="post">
              <div className="input-box">
                <span className="icon"><ion-icon name="mail"></ion-icon></span>
                <input type="email" name="username" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="password" name="password" required />
                <label>Password</label>
              </div>
              <button type="submit" name="login-submit" className="buttoni-login">Login</button>
            </form>
            <div className="login-register">
              <p>Don't have an account <button onClick={toggleForm} className="register-link">Register</button></p>
            </div>
          </div>
        </div>
      </section>

      <section className="Register" id="Register" style={{ display: showLogin ? 'none' : 'block' }}>
        <h5 className="heading">pjesa hederit nese e nevojshme</h5>

        <div className="wrapper">
          <div className="form-box register">
            <h2 className="title2">Registration</h2>
            <form action="register_process.php" method="post">
              <div className="input-box">
                <span className="icon"><ion-icon name="person"></ion-icon></span>
                <input type="text" name="username" required />
                <label>Create Username</label>
              </div>
              <div className="input-box">
                <span className="icon"><ion-icon name="mail"></ion-icon></span>
                <input type="email" name="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="password" name="password" required />
                <label>Password</label>
              </div>
              <div className="input-box user-admin" style={{ color: 'red', fontSize: '16px' }}>
                <span className="icon" style={{ marginTop: '3px' }}><ion-icon name="person-circle-outline"></ion-icon></span>
                <select name="role" required>
                  <option value="user">Student</option>
                  <option value="user">Profesor</option>
                  <option value="admin">Drejtor</option>
                </select>
                <label style={{ top: '-80px', marginLeft: '90px' }}>Jam</label>
              </div>
              <button type="submit" name="register-submit" className="buttoni-login">Register</button>
            </form>
            <div className="login-shift">
              <p>Back to <button onClick={toggleForm} className="login-link">Log in</button></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginForm;
