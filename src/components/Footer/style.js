import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-black);
  border-top: 2px solid var(--color-primary);
  padding: 16px 32px;
  color: var(--color-white);
  position: fixed;
  bottom: 0;
  width:100vw;

  a {
    cursor: pointer;
  }

  a img {
    margin-bottom: 16px;
  }

  p a {
    text-decoration: none;
  }

  strong {
    font-weight: bold;
    transition: color .3s;

    &:hover,
    &:focus {
      color: var(--color-blueLight);
    }
  }

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export default FooterWrapper;