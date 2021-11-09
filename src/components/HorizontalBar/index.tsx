import { Link } from 'react-router-dom';
import { DiAndroid, DiApple } from 'react-icons/di';
import { RiComputerFill } from 'react-icons/ri';

import styles from './style.module.scss';

export function HorizontalBar() {
  return (
    <div className={styles.containerHorizontalBar}>
      <div className={styles.containerHorizontalBarText}>
        <h2>Acesse nossa plataforma</h2>
        <p>e já faça o download da nosso aplicativo para seu celular</p>
      </div>
      <div className={styles.containerHorizontalBarButton}>
        <Link to="/" className={styles.btnPlataform}>
          Plataforma
          <RiComputerFill />
        </Link>
        <Link to="/app-mobile" className={styles.btnPlayStore}>
          Play Store
          <DiAndroid />
        </Link>
        <Link to="/app-mobile" className={styles.btnAppleStore}>
          Apple Store
          <DiApple />
        </Link>
      </div>
    </div>
  );
}
