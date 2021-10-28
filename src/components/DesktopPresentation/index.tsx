import ImgDesktopPresentation from '../../assets/desktopPresentation.jpg';

import styles from './style.module.scss';

export function DesktopPresentation() {
  return (
    <div className={styles.containerDesktop}>
      <div className={styles.titleSection}>
        <h3>Como a plataforma funciona</h3>
      </div>
      <div className={styles.containerContent}>
        <div className={styles.imagem}>
          <img src={ImgDesktopPresentation} alt="Imagem de computador" />
        </div>
        <div className={styles.text}>
          <h4>Faça login na plataforma</h4>
          <h2>Crie/Entre e participe das salas</h2>
          <span>
            Utilize nossa plataforma para garantir a boa comunicação entre aluno
            e futuros ingressantes
          </span>
        </div>
      </div>
    </div>
  );
}
