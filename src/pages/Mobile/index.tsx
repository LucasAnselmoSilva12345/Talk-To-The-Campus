import { Link } from 'react-router-dom';
import { HeaderPage } from '../../components/HeaderPage';
import { RiComputerLine } from 'react-icons/ri';

import ImgMobile from '../../assets/appMobile.svg';

import styles from './style.module.scss';
import { Footer } from '../../components/Footer';

export function Mobile() {
  return (
    <>
      <HeaderPage />
      <main className={styles.containerMobile}>
        <div className={styles.rowMobileButton}>
          <h3>
            Lamentamos 😓 , nosss aplicativo para dispositivos moveis, ainda
            está sendo construido pelo nosso time de desenvolvedores
          </h3>
          <h4>
            Porém, você pode acessar a polataforma pelo seu proprio navegador
          </h4>
          <div className={styles.rowButton}>
            <Link to="/">
              Plataforma Web <RiComputerLine />{' '}
            </Link>
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
