import { Footer } from '../../components/Footer';
import { HeaderPage } from '../../components/HeaderPage';
import { HorizontalBar } from '../../components/HorizontalBar';
import styles from './style.module.scss';

export function Terms() {
  return (
    <>
      <HeaderPage />
      <h1 className={styles.introductionTerms}>Termos de Uso</h1>
      <section className={styles.sectionTerms}>
        <div className={styles.rowTerms}>
          <h4>1. Termos</h4>
          <p>
            Ao acessar ao site Talk to the Campus, concorda em cumprir estes
            termos de serviço, todas as leis e regulamentos aplicáveis ​​e
            concorda que é responsável pelo cumprimento de todas as leis locais
            aplicáveis. Se você não concordar com algum desses termos, está
            proibido de usar ou acessar este site. Os materiais contidos neste
            site são protegidos pelas leis de direitos autorais e marcas
            comerciais aplicáveis.
          </p>
          <h4>2. Uso da Licença</h4>
          <p>
            É concedida permissão para baixar temporariamente uma cópia dos
            materiais (informações ou software) no site Talk to the Campus ,
            apenas para visualização transitória pessoal e não comercial. Esta é
            a concessão de uma licença, não uma transferência de título e, sob
            esta licença, você não pode:
          </p>
          <ul>
            <li>modificar ou copiar os materiais; </li>
            <li>
              usar os materiais para qualquer finalidade comercial ou para
              exibição pública (comercial ou não comercial);
            </li>
            <li>
              tentar descompilar ou fazer engenharia reversa de qualquer
              software contido no site Talk to the Campus;
            </li>
            <li>
              remover quaisquer direitos autorais ou outras notações de
              propriedade dos materiais; ou
            </li>
            <li>
              transferir os materiais para outra pessoa ou 'espelhe' os
              materiais em qualquer outro servidor.
            </li>
          </ul>
          <p>
            Esta licença será automaticamente rescindida se você violar alguma
            dessas restrições e poderá ser rescindida por Talk to the Campus a
            qualquer momento. Ao encerrar a visualização desses materiais ou
            após o término desta licença, você deve apagar todos os materiais
            baixados em sua posse, seja em formato eletrónico ou impresso.
          </p>
          <h4>3. Isenção de responsabilidade</h4>
          <ul>
            <li>
              Os materiais no site da Talk to the Campus são fornecidos 'como
              estão'. Talk to the Campus não oferece garantias, expressas ou
              implícitas, e, por este meio, isenta e nega todas as outras
              garantias, incluindo, sem limitação, garantias implícitas ou
              condições de comercialização, adequação a um fim específico ou não
              violação de propriedade intelectual ou outra violação de direitos.
            </li>
            <li>
              Além disso, o Talk to the Campus não garante ou faz qualquer
              representação relativa à precisão, aos resultados prováveis ​​ou à
              confiabilidade do uso dos materiais em seu site ou de outra forma
              relacionado a esses materiais ou em sites vinculados a este site.
            </li>
          </ul>
          <h4>4. Limitações</h4>
          <p>
            Em nenhum caso o Talk to the Campus ou seus fornecedores serão
            responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos
            por perda de dados ou lucro ou devido a interrupção dos negócios)
            decorrentes do uso ou da incapacidade de usar os materiais em Talk
            to the Campus, mesmo que Talk to the Campus ou um representante
            autorizado da Talk to the Campus tenha sido notificado oralmente ou
            por escrito da possibilidade de tais danos. Como algumas jurisdições
            não permitem limitações em garantias implícitas, ou limitações de
            responsabilidade por danos conseqüentes ou incidentais, essas
            limitações podem não se aplicar a você.
          </p>
          <h4>5. Precisão dos materiais</h4>
          <p>
            Os materiais exibidos no site da Talk to the Campus podem incluir
            erros técnicos, tipográficos ou fotográficos. Talk to the Campus não
            garante que qualquer material em seu site seja preciso, completo ou
            atual. Talk to the Campus pode fazer alterações nos materiais
            contidos em seu site a qualquer momento, sem aviso prévio. No
            entanto, Talk to the Campus não se compromete a atualizar os
            materiais.
          </p>
          <h4>6. Links</h4>
          <p>
            O Talk to the Campus não analisou todos os sites vinculados ao seu
            site e não é responsável pelo conteúdo de nenhum site vinculado. A
            inclusão de qualquer link não implica endosso por Talk to the Campus
            do site. O uso de qualquer site vinculado é por conta e risco do
            usuário.
          </p>
          <h5>Modificações</h5>
          <p>
            O Talk to the Campus pode revisar estes termos de serviço do site a
            qualquer momento, sem aviso prévio. Ao usar este site, você concorda
            em ficar vinculado à versão atual desses termos de serviço.
          </p>
          <h5>Lei aplicável</h5>
          <p>
            Estes termos e condições são regidos e interpretados de acordo com
            as leis do Talk to the Campus e você se submete irrevogavelmente à
            jurisdição exclusiva dos tribunais naquele estado ou localidade.
          </p>
        </div>
      </section>
      <HorizontalBar />
      <Footer />
    </>
  );
}
