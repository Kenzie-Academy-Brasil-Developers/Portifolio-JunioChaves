// import React from 'react';
// import whatsapp from '../../../assets/whatsapp 1.png'
// import linkendin from '../../../assets/linkedin-icon.png'
// import git from '../../../assets/github-icon.png'
// import styles from './style.module.css'

// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.div}>
//         <span className='title5'>Contatos</span>
//         <div className={styles.logo}>
//           <img src={whatsapp} alt="Logo whatsapp" />
//           <img src={linkendin} alt="Logo linkendin" />
//           <img src={git} alt="Logo github" />
//         </div>
//       </div>
//       <div className={styles.text}>
//         <p>Todos os direitos reservados - Junio Chaves</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import whatsapp from '../../../assets/whatsapp 1.png'
import linkendin from '../../../assets/linkedin-icon.png'
import git from '../../../assets/github-icon.png'
import styles from './style.module.scss'

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.div}>
        <span className='title5'>Contatos</span>
        <div className={styles.logo}>
          <a href="tel:+5531988035657" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="Logo whatsapp" />
          </a>
          <a href="https://www.linkedin.com/in/junio-chaves-b60901143" target="_blank" rel="noopener noreferrer">
            <img src={linkendin} alt="Logo linkendin" />
          </a>
          <a href="https://github.com/13Junio-Innovating" target="_blank" rel="noopener noreferrer">
            <img src={git} alt="Logo github" />
          </a>
        </div>
      </div>
      <div className={styles.text}>
        <p>Todos os direitos reservados - Junio Chaves</p>
      </div>
    </footer>
  );
};

export default Footer;
