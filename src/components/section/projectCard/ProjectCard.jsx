import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './style.module.scss';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <img src={project.img} alt={project.name} className={styles.image} />
      <h3 className={styles.title}>{project.name}</h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.icons}>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
  