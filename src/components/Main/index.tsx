import { Link } from 'react-router-dom';
import { VscArrowRight, VscDeviceMobile } from 'react-icons/vsc';

import styles from './style.module.scss';

export function Main() {
  return (
    <main className={styles.main}>
      <header className={styles.containerGeneral}>
        <div className={styles.container}>
          <nav className={styles.navigation}>
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
                <Link to="/">Contato</Link>
              </li>
            </ul>
          </nav>
        </div>
        <section className={styles.containerSection}>
          <div className={styles.section}>
            <h4>talk to the campus</h4>
            <h1>A plataforma que conecta você ao seu futuro local de estudo</h1>
            <p>Crie ou acesses salas para permitir a boa comunicação</p>
          </div>
          <div className={styles.buttonSection}>
            <Link to="/">
              Acessar Plataforma <VscArrowRight />{' '}
            </Link>
            <Link to="/app-mobile">
              Plataforma Mobile <VscDeviceMobile />
            </Link>
          </div>
        </section>
      </header>
    </main>
  );
}
