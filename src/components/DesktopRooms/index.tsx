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
          <h4>Agora é só aguardar</h4>
          <h2>Após sua dúvida ser enviado para nós</h2>
          <span>
            Os alunos que estão respondendo as perguntas, logo logo vão
            esclarecer sua dúvida.
          </span>
        </div>
      </div>
    </div>
  );
}
