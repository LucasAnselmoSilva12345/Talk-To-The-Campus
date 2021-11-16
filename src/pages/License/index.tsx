import { HeaderPage } from '../../components/HeaderPage/index';
import { HorizontalBar } from '../../components/HorizontalBar';
import { Footer } from '../../components/Footer';

import styles from './style.module.scss';

export function License() {
  return (
    <>
      <HeaderPage />
      <h1 className={styles.introductionLicense}>Licença da plataforma</h1>
      <main className={styles.containerLicense}>
        <div className={styles.rowLicense}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            obcaecati officia, repudiandae deserunt culpa similique itaque eos
            eum mollitia minima reiciendis reprehenderit debitis ut voluptatum
            veniam voluptas ducimus sed sint!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            ipsum. Fugiat eius, recusandae quam qui dicta architecto minus eum,
            natus nesciunt cum maxime atque, soluta inventore aliquam quae sit
            amet?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            ipsum. Fugiat eius, recusandae quam qui dicta architecto minus eum,
            natus nesciunt cum maxime atque, soluta inventore aliquam quae sit
            amet?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            ipsum. Fugiat eius, recusandae quam qui dicta architecto minus eum,
            natus nesciunt cum maxime atque, soluta inventore aliquam quae sit
            amet?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            ipsum. Fugiat eius, recusandae quam qui dicta architecto minus eum,
            natus nesciunt cum maxime atque, soluta inventore aliquam quae sit
            amet?
          </p>
        </div>
      </main>
      <HorizontalBar />
      <Footer />
    </>
  );
}
