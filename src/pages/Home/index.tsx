import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';

import style from './style.module.scss';

export function Home() {
  return (
    <>
      <Header />
      <main className={style.containerMain}>
        <div className={style.main}>
          <h4>Crie ou acesses salas, para permitir a boa comunicação </h4>
          <h1>A plataforma que conecta você ao seu futuro local de estudo</h1>
        </div>
        <div className={style.buttonMain}>
          <Link to="/">Acessar Plataforma</Link>
          <Link to="/">Acessar Plataforma</Link>
        </div>
      </main>
    </>
  );
}
