import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  section?: 'list' | 'import';
}

const Header: React.FC<HeaderProps> = ({
  section = 'list',
  size = 'large',
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        {}
        <Link className={section === 'list' ? 'active' : ''} to="/">
          Listagem
        </Link>
        <Link className={section === 'import' ? 'active' : ''} to="/import">
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
