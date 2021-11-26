import { HeaderPage } from '../../components/HeaderPage';
import { HorizontalBar } from '../../components/HorizontalBar';
import { Footer } from '../../components/Footer';
import { Principles } from '../../components/Principles';

import ImgAboutOne from '../../assets/about1.jpg';
import ImgAboutTwo from '../../assets/about2.jpg';

import styles from './style.module.scss';

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

      <Principles />

      <section className={styles.qualities}>
        <div className={styles.qualitiesItem}>
          <h2>Nosso objetivo</h2>
          <p>
            Contribuir com a comunidade de estudantes que vão prestar os
            vestibulares, afim de proporcionar uma possibilidade que os alunos
            conheçam tudo sobre seu curso.
          </p>
        </div>

        <div className={styles.qualitiesItem}>
          <h2>Nossas inteções</h2>
          <p>
            Permitir a retirada total de duvidas dos futuros alunos em cursos
            superiores, garantindo que o aluno tenha total certeza de como é o
            curso desejado e ajudando a faculdade nas divulgações.
          </p>
        </div>

        <div className={styles.qualitiesItem}>
          <h2>Nosso futuro</h2>
          <p>
            Contribuir com as faculdades locais em nossa região, depois realizar
            contribuições com todas as faculdade do estado, e mais para frente,
            todas as faculdade do Brasil
          </p>
        </div>

        <div className={styles.qualitiesItem}>
          <h2>Expansão da plataforma</h2>
          <p>
            Hoje nossa plataforma só está atendendo em questão de retirada de
            dúvidas em cursos superiores, porém futuramente, iremos atender as
            escolas tecnicas e escolas particulares/públicas
          </p>
        </div>

        <div className={styles.qualitiesItem}>
          <h2>Sua colaboração na plataforma</h2>
          <p>
            Você <span>desenvolvedor</span> pode nos ajudar, contribuindo na
            nossa plataforma, sugerindo modificações, sugestões. Para contribuir
            na plataforma, baixe o nosso projeto e faça sua modificações:
            <ul>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Site
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Plataforma
                </a>
              </li>
            </ul>
          </p>
        </div>

        <div className={styles.qualitiesItem}>
          <h2>Nossas contribuições</h2>
          <p>Trabalho de Projeto Interdisciplinar de computação</p>
        </div>
      </section>

      <HorizontalBar />
      <Footer />
    </>
  );
}
