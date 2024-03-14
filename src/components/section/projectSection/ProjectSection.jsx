import React from 'react';
import { projects } from '../../../data/projects';
import ProjectCard from '../projectCard/ProjectCard';
import styles from './style.module.scss'

const ProjectSection = () => {
  return (
    <section id="projetos" className={styles.projectSection}>
      <h2 className='title4'>Projetos</h2>
      <ul className={styles.projectCards}>
        {projects.map((project, id) => (
          <ProjectCard key={id} name={project.name} description={project.description} img={project.img} paragraph={project.paragraph}/>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;