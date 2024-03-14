// import React from 'react';
// import img from '../../../assets/banner-img.png'
// import styles from './style.module.css'

// const BannerSection = () => {
//   return (
//     <section className={styles.bannerSection}>
//       <div className={styles.container}>
//         <h4 className='titleNome'>Junio Chaves</h4>
//         <h2 className='title1'>Bem vindo ao meu portfólio</h2>
//         <p className='paragraph'>Uma frase interessante sobre mim</p>
//         <button className={styles.btn}>Saiba mais</button>
//       </div>
//       <div>
//         <img src={img} alt="Imagem banner" />
//       </div>
//     </section>
//   );
// };

// export default BannerSection;

import React from 'react';
import img from '../../../assets/banner-img.png'
import styles from './style.module.scss';

const BannerSection = () => {
  const githubURL = 'https://github.com/13Junio-Innovating';

  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <h4 className='titleNome'>Junio Chaves</h4>
        <h2 className='title1'>Bem vindo ao meu portfólio</h2>
        <a href={githubURL} target="_blank" rel="noopener noreferrer">
          <button className={styles.btn}>Saiba mais</button>
        </a>
      </div>
      <div>
        <img src={img} alt="Imagem banner" />
      </div>
    </section>
  );
};

export default BannerSection;
