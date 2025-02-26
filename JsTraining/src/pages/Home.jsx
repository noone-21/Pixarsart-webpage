import React from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import styles from './stylesheets/Home.module.css'

const Home = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navLogo}>
          <img src={logo} alt="logo" />
        </div>
        <ul className={styles.navList}>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      <section className={styles.main}>
        <div className={styles.left}>
          <div className={styles.intro}>
            <h1>Hello, I'am </h1>
            <h1>Danish Ahmed</h1>
          </div>
          <button className={styles.contactBtn}>Get in Touch</button>
          <section className={styles.stats}>
            <div>
              <h1>100</h1>
              <h3>Happy Client</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus architecto dignissimos sit cupiditate?
              </p>
            </div>
            <div>
              <h1>120</h1>
              <h3>Projects</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus architecto dignissimos sit cupiditate?
              </p>
            </div>
          </section>
        </div>

        <div className={styles.right}>
          <img className={styles.profileImg} src={profile} alt="Image" />
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          Created by
          <a href="https://www.linkedin.com/in/noone21/">Danish Ahmed</a>|
          &copy; 2025
        </p>
      </footer>
    </>
  );
};

export default Home;
