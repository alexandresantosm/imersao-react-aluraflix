import React from 'react';
import FooterWrapper from './style';

function Footer() {
  return (
    <FooterWrapper>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logomarca Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a {' '}
        <a href="https://www.alura.com.br/" >
          <strong>Imersão React</strong> da Alura
        </a>
      </p>
    </FooterWrapper>
  );
}

export default Footer;