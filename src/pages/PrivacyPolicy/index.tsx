import { Footer } from '../../components/Footer';
import { HeaderPage } from '../../components/HeaderPage';
import { HorizontalBar } from '../../components/HorizontalBar';
import styles from './style.module.scss';

export function PrivacyPolicy() {
  return (
    <>
      <HeaderPage />
      <h1 className={styles.introductionPrivacyPolicy}>Política Privacidade</h1>
      <section className={styles.sectionPrivacyPolicy}>
        <div className={styles.rowPrivacyPolicy}>
          <p>
            A sua privacidade é importante para nós. É política do Talk to the
            Campus respeitar a sua privacidade em relação a qualquer informação
            sua que possamos coletar no site Talk to the Campus, e outros sites
            que possuímos e operamos.
          </p>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos
            delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
            legais, com o seu conhecimento e consentimento. Também informamos
            por que estamos coletando e como será usado.
          </p>
          <p>
            Apenas retemos as informações coletadaspelo tempo necessário para
            fornecer o serviço solicitado. Quando armazenamos dados, protegemos
            dentro de meios comercialmente aceitáveis ​​para evitar perdas e
            roubos, bem como acesso, divulgação, cópia, uso ou modificação não
            autorizados.
          </p>
          <p>
            Não compartilhamos informações de identificação pessoal publicamente
            ou com terceiros, exceto quando exigido por lei.
          </p>
          <p>
            O nosso site pode ter links para sites externos que não são operados
            por nós. Esteja ciente de que não temos controle sobre o conteúdo e
            práticas desses sites e não podemos aceitar responsabilidade por
            suas respectivas políticas de privacidade.
          </p>
          <p>
            Você é livre para recusar a nossa solicitação de informações
            pessoais, entendendo que talvez não possamos fornecer alguns dos
            serviços desejados.
          </p>
          <p>
            O uso continuado de nosso site será considerado como aceitação de
            nossas práticas em torno de privacidade e informações pessoais. Se
            você tiver alguma dúvida sobre como lidamos com dados do usuário e
            informações pessoais, entre em contacto connosco.
          </p>
          <h4>Compromisso do Usuário</h4>
          <p>
            O usuário se compromete a fazer uso adequado dos conteúdos e da
            informação que o Talk to the Campus oferece no site e com caráter
            enunciativo, mas não limitativo:
          </p>
          <ul>
            <li>
              Não se envolver em atividades que sejam ilegais ou contrárias à
              boa fé a à ordem pública;
            </li>
            <li>
              Não difundir propaganda ou conteúdo de natureza racista,
              xenofóbica, jogos de hoje ou azar, qualquer tipo de pornografia
              ilegal, de apologia ao terrorismo ou contra os direitos humanos;
            </li>
            <li>
              Não causar danos aos sistemas físicos (hardwares) e lógicos
              (softwares) do Talk to the Campus, de seus fornecedores ou
              terceiros, para introduzir ou disseminar vírus informáticos ou
              quaisquer outros sistemas de hardware ou software que sejam
              capazes de causar danos anteriormente mencionados.
            </li>
          </ul>
          <h4>Mais informações</h4>
          <p>
            Esperemos que esteja esclarecido e, como mencionado anteriormente,
            se houver algo que você não tem certeza se precisa ou não,
            geralmente é mais seguro deixar os cookies ativados, caso interaja
            com um dos recursos que você usa em nosso site.
          </p>
          <p>
            Esta política é efetiva a partir de <span>Dezembro/2021.</span>
          </p>
        </div>
      </section>
      <HorizontalBar />
      <Footer />
    </>
  );
}
