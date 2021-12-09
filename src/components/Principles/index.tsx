import styles from './style.module.scss';

export function Principles() {
  return (
    <section className={styles.values}>
      <div className={styles.valuesItem}>
        <h2>Missão</h2>
        <ul>
          <li>Proporciona a entrada de pessoas em cursos superiores.</li>
          <li>Contribuir com as divulgações de cursos das faculdades.</li>
          <li>Ajudar o aluno entrar no curso certo, e no lugar certo.</li>
          <li>Esclarecimentos sobre seus cursos de ensino superior.</li>
        </ul>
      </div>

      <div className={styles.valuesItem}>
        <h2>Visão</h2>
        <ul>
          <li>Ajudar todas as pessoas possíveis.</li>
          <li>Uma plataforma acessível para todos.</li>
          <li>Permitir a contribuição de vários dev na plataforma.</li>
          <li>Proporciona uma plataforma livre e de acesso para todos.</li>
        </ul>
      </div>

      <div className={styles.valuesItem}>
        <h2>Valores</h2>
        <ul>
          <li>Investir na formação de jovens em ensino superior.</li>
          <li>Preservar o respeito em toda a comunidade estudantil.</li>
          <li>Motivar o aprendizado de alunos.</li>
          <li>Garantir a entrada de alunos em cursos superiores.</li>
        </ul>
      </div>
    </section>
  );
}
