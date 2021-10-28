import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { DesktopPresentation } from '../../components/DesktopPresentation';

import { VscArrowRight, VscDeviceMobile } from 'react-icons/vsc';

import style from './style.module.scss';

export function Home() {
  return (
    <>
      <Header />
      <main className={style.containerMain}>
        <div className={style.main}>
          <h4>Crie ou acesses salas para permitir a boa comunicação </h4>
          <h1>A plataforma que conecta você ao seu futuro local de estudo</h1>
        </div>
        <div className={style.buttonMain}>
          <Link to="/">
            Acessar Plataforma <VscArrowRight />{' '}
          </Link>
          <Link to="/">
            Plataforma Mobile <VscDeviceMobile />
          </Link>
        </div>
      </main>
      <DesktopPresentation />
    </>
  );
}
