import { HeaderPage } from '../../components/HeaderPage';

import imgDeveloperOne from '../../assets/developerOne.jpg';
import imgDeveloperTwo from '../../assets/developerTwo.jpg';

import styles from './style.module.scss';
import { HorizontalBar } from '../../components/HorizontalBar';
import { Footer } from '../../components/Footer';

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            suscipit quis possimus vel odit. Laboriosam, pariatur ea ex, a neque
            quisquam maxime veniam, in cupiditate tempora vitae voluptate eius
            eaque.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsam
            delectus excepturi est sapiente harum amet labore vitae omnis, non
            tenetur. Alias voluptatem suscipit, sequi officia recusandae iure
            nemo odit?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsam
            delectus excepturi est sapiente harum amet labore vitae omnis, non
            tenetur. Alias voluptatem suscipit, sequi officia recusandae iure
            nemo odit?
          </p>
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
