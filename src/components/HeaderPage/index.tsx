import { Link } from 'react-router-dom';
import styles from './style.module.scss';

export function HeaderPage() {
  return (
    <>
      <div className={styles.motivationalPhraseBg}>
        <div className={styles.motivationalPhrase}>
          <span>
            Você é mais corajoso do que acredita, mais forte do que parece e
            mais inteligente do que pensa.
          </span>
          <p>A.A Milne</p>
        </div>
      </div>

      <header className={styles.headerBg}>
        <div className={styles.header}>
          <div className={styles.headerLogo}>
            <Link to="/"> Talk to the Campus </Link>
          </div>
          <nav className={styles.headerNavigation}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Sobre</Link>
              </li>
              <li>
                <Link to="/">Equipe</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
