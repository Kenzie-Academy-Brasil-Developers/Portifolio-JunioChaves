import React from 'react';
import styles from './style.module.scss'

const AboutSection = () => {
  return (
    <section id="sobre" className={styles.aboutSection}>
      <div className={styles.sobre}>
        <h2 className='title2'>Sobre mim</h2>
      </div>
        <div className={styles.paragraph}>
          <p className='paragraph'>
            Desde bem jovem tive muito interesse sobre tecnologia, comprei um
            desktop 386 com um vídeo cassete. Ainda aos 18 eu fiz um curso
            simples de informática, e de cara percebi que essa era minha paixão.
            Mas a vida tomou outros rumos: eu me casei, e a vida deu muitas
            voltas. Com isso, o talento para a tecnologia ficaria adormecido nas
            próximas décadas. Em 2021, durante a pandemia comecei a estudar na
            faculdade o curso de análise e desenvolvimento de sistemas, e desde
            então tenho estudado muito e assistindo vários vídeos na internet
            até que encontrei a Kenzie.
          </p>
        </div>
    </section>
  );
};

export default AboutSection;
