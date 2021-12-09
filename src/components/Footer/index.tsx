import { Link } from 'react-router-dom';

import {
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

import styles from './style.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <h4>Talk to the Campus</h4>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/about"> Sobre nós </Link>
              </li>
              <li>
                <Link to="/team"> Equipe </Link>
              </li>
              <li>
                <Link to="/contact"> Contato </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Plataforma mobile</h4>
            <ul>
              <li>
                <Link to="/app-mobile"> Play Store </Link>
              </li>
              <li>
                <Link to="/app-mobile"> Apple Store </Link>
              </li>
              <li>
                <Link to="/app-mobile"> Microsoft Store </Link>
              </li>
              <li>
                <Link to="/app-mobile"> Linux Store </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>A plataforma</h4>
            <ul>
              <li>
                <Link to="/privacy-policy"> Política de Privacidade </Link>
              </li>
              <li>
                <Link to="/terms">Termos</Link>
              </li>
              <li>
                <Link to="/license"> Licença da plataforma </Link>
              </li>
              <li>
                <Link to="/contribute"> Contribua com a plataforma </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Redes Sociais</h4>
            <div className={styles.socialLink}>
              <a href="https://github.com/LucasAnselmoSilva12345">
                {' '}
                <FaGithub />{' '}
              </a>

              <a href="https://web.facebook.com/lucas.anselmomoraesdasilva">
                {' '}
                <FaFacebook />{' '}
              </a>

              <a href="https://www.instagram.com/lucas_anselmo2025/">
                {' '}
                <FaInstagram />{' '}
              </a>

              <a href="https://twitter.com/LucasAnselmo202">
                {' '}
                <FaTwitter />{' '}
              </a>

              <a href="https://www.linkedin.com/in/lucas-anselmo-moraes-da-silva-543636161/">
                {' '}
                <FaLinkedin />{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
