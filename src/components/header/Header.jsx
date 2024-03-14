import React from 'react';
import logo from '../../assets/portfolio.png'
import styles from './style.module.scss'
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="Logo portifolio" />
        <div className={styles.menu}>
          <Link
            activeClass="active"
            to="sobre"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Sobre
          </Link>
          <Link
            activeClass="active"
            to="stack"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Stack
          </Link>
          <Link
            activeClass="active"
            to="projetos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projetos
          </Link>
        </div>
        <Link
          activeClass="active"
          to="footer"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className={styles.contato}>Contatos</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
