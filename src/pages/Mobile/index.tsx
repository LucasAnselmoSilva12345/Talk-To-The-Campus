import { Link } from 'react-router-dom';
import { HeaderPage } from '../../components/HeaderPage';
import { Footer } from '../../components/Footer';

import { RiComputerLine } from 'react-icons/ri';

import ImgMobile from '../../assets/appMobile.svg';

import styles from './style.module.scss';

export function Mobile() {
  return (
    <>
      <HeaderPage />
      <main className={styles.containerMobile}>
        <div className={styles.rowMobileButton}>
          <h3>
            Lamentamos 😓 , nosso aplicativo ainda está sendo construido pelo
            nosso time de desenvolvedores.
          </h3>
          <h4>
            Entretanto, você pode acessar a plataforma pelo seu próprio
            navegador
          </h4>
          <div className={styles.rowButton}>
            <a href="https://github.com/LucasAnselmoSilva12345/app_Talk_To_The_Campus">
              Plataforma Web <RiComputerLine />{' '}
            </a>
          </div>
        </div>
        <div className={styles.rowImage}>
          <img src={ImgMobile} alt="Plataforma Mobile" />
        </div>
      </main>
      <Footer />
    </>
  );
}
