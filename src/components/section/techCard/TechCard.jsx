import React from 'react';
import styles from './style.module.scss'

const TechCard = ({ name, img, description }) => {
  return (
    <li className={styles.techCard}>
      <img className={styles.image} src={img} alt={description} />
      <h3>{name}</h3>
    </li>
  );
};

export default TechCard;
