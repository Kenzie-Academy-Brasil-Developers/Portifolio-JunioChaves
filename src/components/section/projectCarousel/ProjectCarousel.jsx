import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projects } from '../../../data/projects';
import ProjectCard from '../projectCard/ProjectCard';
import styles from './style.module.scss';

const ProjectCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div id="projetos" className={styles.carrossel}>
      <h2 className='title4'>Projetos</h2>
      <Slider {...settings}>
        {projects.map(project => (
          <div key={project.id} className={styles.slide}>
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;
