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
            O objetivo da plataforma é permite que as instituições de ensino
            (faculdades, escolas tecnicas), possam conectar seus alunos, junto
            com os futuros alunos ingressantes, afim de proporciona uma iteração
            direta de alunos para aluno, na intenção, que o futuro estudante,
            possa retirar duvida que ele tem sobre seu futuro curso, ou qualquer
            duvida relacionado do tipo.
          </p>
          <p>
            A intenção dessa iteração, e permite que o aluno ingressante, tenha
            total ciencia de que o curso desejado por ele, é de fato o que ele
            imagina e além de retirar as duvidas, motivar ainda mais o aluno a
            querer prestar os vestibulares para entrar no campus e estudar o
            curso.
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
