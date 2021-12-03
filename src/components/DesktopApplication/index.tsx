import ImgDesktopApplication from '../../assets/desktopApplication.jpg';

import styles from './style.module.scss';

export function DesktopApplication() {
  return (
    <div className={styles.containerApplication}>
      <div className={styles.containerContentApplication}>
        <div className={styles.textApplication}>
          <h4>Informe suas dúvidas</h4>
          <h2>Envie suas questões para serem respondidas</h2>
          <span>
            Utilize nossa plataforma obter a resposta para aquela dúvida, que
            está te incomodando
          </span>
        </div>
        <div className={styles.imagemApplication}>
          <img src={ImgDesktopApplication} alt="Imagem de computador" />
        </div>
      </div>
    </div>
  );
}
