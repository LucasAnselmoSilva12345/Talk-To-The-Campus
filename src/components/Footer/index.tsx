import {
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
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
                <Link to="/"> Sobre nós </Link>
              </li>
              <li>
                <Link to="/"> Equipe </Link>
              </li>
              <li>
                <Link to="/"> Contato </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Plataforma mobile</h4>
            <ul>
              <li>
                <Link to="/"> Play Store </Link>
              </li>
              <li>
                <Link to="/"> Apple Store </Link>
              </li>
              <li>
                <Link to="/"> Microsoft Store </Link>
              </li>
              <li>
                <Link to="/"> Linux Store </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Sobre a plataforma</h4>
            <ul>
              <li>
                <Link to="/"> Documentação </Link>
              </li>
              <li>
                <Link to="/"> Direitos da plataforma </Link>
              </li>
              <li>
                <Link to="/"> Contribua com a plataforma </Link>
              </li>
              <li>
                <Link to="/"> Ajude a comunidade Open-Source </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Sobre a plataforma</h4>
            <div className={styles.socialLink}>
              <Link to="/">
                {' '}
                <FaGithub />{' '}
              </Link>

              <Link to="/">
                {' '}
                <FaFacebook />{' '}
              </Link>

              <Link to="/">
                {' '}
                <FaInstagram />{' '}
              </Link>

              <Link to="/">
                {' '}
                <FaTwitter />{' '}
              </Link>

              <Link to="/">
                {' '}
                <FaLinkedin />{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
