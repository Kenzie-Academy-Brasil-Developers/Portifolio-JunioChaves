import React from 'react';
import technologies from '../../../data/technologies';
import styles from './style.module.scss'
import TechCard from '../techCard/TechCard'
 
const TechSection = () => {
  return (
    <section id="stack">
      <h2 className='title3'>Tecnologias</h2>
      <ul className={styles.techList}>
        {technologies.map((tech, id) => (
          <TechCard key={id} name={tech.name} img={tech.img} />
        ))}
      </ul>
    </section>
  );
};

export default TechSection;
