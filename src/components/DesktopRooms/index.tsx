import ImgDesktopRooms from '../../assets/desktopRooms.jpg';
import styles from './style.module.scss';

export function DesktopRooms() {
  return (
    <div className={styles.containerDesktopRooms}>
      <div className={styles.containerContentRooms}>
        <div className={styles.imagemRooms}>
          <img src={ImgDesktopRooms} alt="Imagem de computador" />
        </div>
        <div className={styles.textRooms}>
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
