import { Link } from 'react-router-dom';
import { HeaderPage } from '../../components/HeaderPage';
import { HorizontalBar } from '../../components/HorizontalBar';
import { Footer } from '../../components/Footer';

import { VscGithub, VscGithubAlt } from 'react-icons/vsc';

import imgDeveloperOne from '../../assets/developerOne.jpg';
import imgDeveloperTwo from '../../assets/developerTwo.jpg';

import styles from './style.module.scss';

export function ContributePlatform() {
  return (
    <>
      <HeaderPage />
      <h1 className={styles.introductionContribute}>
        Contribua com a plataforma
      </h1>
      <main className={styles.mainContribute}>
        <div className={styles.infoContribute}>
          <h1>
            Você <span>Desenvolvedor</span> pode nos ajudar
          </h1>
          <p>
            Você Dev, que tem uma ideia de como contribuir com a plataforma,
            ajudando há melhorar a estrutura, adicionar mais funcionalidades, ou
            outras ideias, pode entrar em contato conosco através da nossa
            <Link to="/contato"> página de contato.</Link>
          </p>
          <p>
            E não só você Dev front-end ou back-end, você que também é
            desenvolvedor de banco de dados, engenheiro de dados, analista de
            sistema, independente da sua formação, você pode contribuir com a
            plataforma.
          </p>

          <div className={styles.containerProjectsGitHub}>
            <a href="https://github.com/LucasAnselmoSilva12345/Talk-To-The-Campus">
              {' '}
              <VscGithub /> Site
            </a>

            <a href="https://github.com/LucasAnselmoSilva12345/app_Talk_To_The_Campus">
              <VscGithubAlt /> Plataforma
            </a>
          </div>
        </div>
        <div className={styles.imgContribute}>
          <img src={imgDeveloperOne} alt="" />
        </div>
        <div className={styles.imgContribute}>
          <img src={imgDeveloperTwo} alt="" />
        </div>
      </main>

      <HorizontalBar />
      <Footer />
    </>
  );
}
