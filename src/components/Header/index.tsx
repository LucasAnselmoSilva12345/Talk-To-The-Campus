import { Link } from 'react-router-dom';

import styles from './style.module.scss';

import LogotipoImg from '../../assets/logotipo/logotipo.png';

export function Header() {
  return (
    <header className={styles.containerGeneral}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Link to="/">
            <img src={LogotipoImg} alt="Talk To The Campus" />
          </Link>
        </div>

        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Sobre</Link>
            </li>
            <li>
              <Link to="/">Equipe</Link>
            </li>
            <li>
              <Link to="/">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
