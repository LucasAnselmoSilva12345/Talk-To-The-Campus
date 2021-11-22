import styles from './style.module.scss';

export function Principles() {
  return (
    <section className={styles.values}>
      <div className={styles.valuesItem}>
        <h2>Missão</h2>
        <ul>
          <li>Ajudar alunos ingressantes em cursos superiores.</li>
          <li>Ajudar as faculdades na divulgação dos seus cursos.</li>
          <li>Fazer o aluno entrar no curso certo, e no lugar certo.</li>
          <li>Fazer as faculdades esclarecer tudo sobre seus cursos.</li>
        </ul>
      </div>

      <div className={styles.valuesItem}>
        <h2>Visão</h2>
        <ul>
          <li>Ajudar o maximo de pessoas possíveis</li>
          <li>Fazer uma plataforma acessível à todos</li>
          <li>Permitir a contribuição de varios dev na plataforma</li>
          <li>Ajudar toda a comunidade de ingressantes com essa plataforma</li>
        </ul>
      </div>

      <div className={styles.valuesItem}>
        <h2>Valores</h2>
        <ul>
          <li>Investir na educação</li>
          <li>Preservar o respeito</li>
          <li>Motivar o apreendizado</li>
          <li>Garantir os ensinamentos</li>
        </ul>
      </div>
    </section>
  );
}
