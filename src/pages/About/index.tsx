import { HeaderPage } from '../../components/HeaderPage';
import styles from './style.module.scss';

import ImgAboutOne from '../../assets/about1.jpg';
import ImgAboutTwo from '../../assets/about2.jpg';
import { HorizontalBar } from '../../components/HorizontalBar';
import { Footer } from '../../components/Footer';

export function About() {
  return (
    <>
      <HeaderPage />
      <h1 className={styles.introductionAbout}>Objetivos da plataforma</h1>
      <section className={styles.sectionAbout}>
        <div className={styles.aboutInfo}>
          <h1>Sobre nossa aplicação</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            quod explicabo ea voluptatibus quibusdam, perspiciatis animi
            corporis quam ipsum iure eum nemo ratione nostrum praesentium error
            ex, veritatis earum assumenda!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, ipsam!
            Cupiditate id, excepturi atque quaerat, molestiae eveniet unde minus
            quas sapiente accusamus voluptas quod ipsum quisquam recusandae hic
            fuga quia.
          </p>
        </div>
        <div className={styles.aboutImg}>
          <img src={ImgAboutOne} alt="Pessoa digitando no computador" />
        </div>
        <div className={styles.aboutImg}>
          <img src={ImgAboutTwo} alt="Grupo de pessoas olhando o computador" />
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.valuesItem}>
          <h2>Missão</h2>
          <ul>
            <li>Teste</li>
            <li>Teste</li>
            <li>Teste</li>
            <li>Teste</li>
          </ul>
        </div>

        <div className={styles.valuesItem}>
          <h2>Valores</h2>
          <ul>
            <li>Teste</li>
            <li>Teste</li>
            <li>Teste</li>
            <li>Teste</li>
          </ul>
        </div>

        <div className={styles.valuesItem}>
          <h2>Visão</h2>
          <ul>
            <li>Teste</li>
            <li>Teste</li>
            <li>Teste</li>
            <li>Teste</li>
          </ul>
        </div>
      </section>

      <section className={styles.qualities}>
        <div className={styles.qualitiesItem}>
          <h2>TextoIncrivel</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            facere doloremque consequuntur officia ab asperiores magnam culpa
            nemo. Ratione hic voluptas ea ducimus sunt corrupti, facilis quae
            sed rerum ab.
          </p>
        </div>

        <div className={styles.qualitiesItem}>
          <h2>TextoIncrivel</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            facere doloremque consequuntur officia ab asperiores magnam culpa
            nemo. Ratione hic voluptas ea ducimus sunt corrupti, facilis quae
            sed rerum ab.
          </p>
        </div>

        <div className={styles.qualitiesItem}>
          <h2>TextoIncrivel</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            facere doloremque consequuntur officia ab asperiores magnam culpa
            nemo. Ratione hic voluptas ea ducimus sunt corrupti, facilis quae
            sed rerum ab.
          </p>
        </div>

        <div className={styles.qualitiesItem}>
          <h2>TextoIncrivel</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            facere doloremque consequuntur officia ab asperiores magnam culpa
            nemo. Ratione hic voluptas ea ducimus sunt corrupti, facilis quae
            sed rerum ab.
          </p>
        </div>

        <div className={styles.qualitiesItem}>
          <h2>TextoIncrivel</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            facere doloremque consequuntur officia ab asperiores magnam culpa
            nemo. Ratione hic voluptas ea ducimus sunt corrupti, facilis quae
            sed rerum ab.
          </p>
        </div>

        <div className={styles.qualitiesItem}>
          <h2>TextoIncrivel</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            facere doloremque consequuntur officia ab asperiores magnam culpa
            nemo. Ratione hic voluptas ea ducimus sunt corrupti, facilis quae
            sed rerum ab.
          </p>
        </div>
      </section>

      <HorizontalBar />
      <Footer />
    </>
  );
}
