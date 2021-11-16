import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import BgCardImg from '../../assets/team/bg_card.jpg';
import ProfileImg from '../../assets/team/LucasAnselmo.jpeg';

import styles from './style.module.scss';

export function TeamMembers() {
  return (
    <main className={styles.section_team}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Conheça nossa equipe</h2>
        <div className={styles.card_wrapper}>
          <div className={styles.card}>
            <img
              className={styles.cardImg}
              src={BgCardImg}
              alt="Imagem de fundo estrelado"
            />
            <img
              className={styles.profileImg}
              src={ProfileImg}
              alt="Lucas Anselmo"
            />
            <h3>Lucas Anselmo</h3>
            <p className={styles.job_title}>
              Frontend Developer && Criador da plataforma
            </p>
            <p className={styles.about}>
              Conheça mais sobre o Lucas, sobre seu começo na programação e
              varias curiosidades sobre ele.
            </p>
            <Link to="/" className={styles.btnTeam}>
              Conhecer
            </Link>
            <ul className={styles.socialMedia}>
              <li>
                <a href="https://www.facebook.com/lucas.anselmomoraesdasilva">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/LucasAnselmo202">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/lucas_anselmo2025/">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lucas-anselmo-moraes-da-silva-543636161/">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
