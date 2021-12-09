import { HeaderPage } from '../../components/HeaderPage';
import { HorizontalBar } from '../../components/HorizontalBar';
import { Footer } from '../../components/Footer';

import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaGoogle,
  FaTwitter,
  FaTelegramPlane,
} from 'react-icons/fa';

import styles from './style.module.scss';

export function Contact() {
  return (
    <>
      <HeaderPage />
      <main className={styles.containerContact}>
        <h1>Entre em contato conosco pela forma que preferir</h1>
        <div className={styles.columnContact}>
          <a
            href="mailto:lucasanselmodasilva02@gmail.com"
            className={styles.buttonEmail}
          >
            <FaGoogle />
            E-mail
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-anselmo-moraes-da-silva-543636161/"
            target="_blank"
            className={styles.buttonLinkedin}
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href="https://wa.me/11999999999"
            target="_blank"
            className={styles.buttonWhatsapp}
          >
            <FaWhatsapp />
            WhatsApp
          </a>
          <a
            href="https://twitter.com/LucasAnselmo202"
            target="_blank"
            className={styles.buttonTwitter}
          >
            <FaTwitter />
            Twitter
          </a>
          <a
            href="https://web.facebook.com/lucas.anselmomoraesdasilva"
            target="_blank"
            className={styles.buttonFacebook}
          >
            <FaFacebook />
            Facebook
          </a>

          <a
            href="https://t.me/11986854687/"
            target="_blank"
            className={styles.buttonTelegram}
          >
            <FaTelegramPlane />
            Telegram
          </a>
        </div>
      </main>
      <HorizontalBar />
      <Footer />
    </>
  );
}
