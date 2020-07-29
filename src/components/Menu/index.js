import React from 'react';
import Logo from '../../assets/logo-aluraflix.png';
import { LogoImage, MenuWrapper} from './style';
import Button from '../Button';

function Menu() {
  return (
    <MenuWrapper>
      <a href="/">
        <LogoImage src={Logo} alt="Logomarca AluraFlix" />
      </a>

      <Button as="a">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;