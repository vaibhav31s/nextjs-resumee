import styles from '../styles/banner.module.css';
import Linkedin from '../svg/linkedin.js';
import Github from '../svg/github.js';
import { useContext } from 'react';
import { Contexto } from '../appContext';

export default function Banner() {
  const name = 'Vaibhav Gawad';
  const email = 'gawadvaibhavv@gmail.com';
  const { setIsOpen } = useContext(Contexto);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <section className={`container ${styles.banner}`}>
      <div className={`containerCont ${styles.bannerCont}`}>
        <section className={styles.bannerContLeft}>
          <h2>
            Hi there{' '}
            <span role="img" aria-label="hello">
              👋
            </span>
            , I'm
          </h2>
          <h1>{name}</h1>
          <h2>
            Software Engineer <span className={styles.dash}>-</span>
            <span className={styles.brH2}>
              <br />
            </span>{' '}
            Web Developer
          </h2>
          <h3>HTML / CSS / JS / React</h3>
          <h3>
            <a href={`mailto:${email}`}>{email}</a>
          </h3>
          <div className={`${styles.buttons}`}>
            <div>
              <button className={`${styles.but}`}>
                <a target="_blank" href="/pdf/VaibhavGawad.pdf">
                  DOWNLOAD RESUME
                </a>
              </button>
              <button className={`${styles.svgBut}`}>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/Vaibhav-gawad/"
                >
                  <Linkedin />
                </a>
              </button>
              <button className={`${styles.svgBut}`}>
                <a target="_blank" href="https://github.com/Vaibhav31s">
                  <Github />
                </a>
              </button>
            </div>

            <button onClick={openModal} className={`${styles.but}`}>
              CONTACT ME
            </button>
          </div>
        </section>
        <figure className={styles.bannerContRight}>
          <img alt="Vaibhav Gawad" src="/images/ogImage.png" />
        </figure>
      </div>
    </section>
  );
}
