import styled from 'styled-components';

export const MenuWrapper = styled.nav`
  max-width: 100vw;
  height: 94px;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 5%;
  padding-right: 5%;

  background: var(--color-black);
  border-bottom: 2px solid var(--color-primary);

  @media(max-width: 800px) {
    height: 40px;
    justify-content: center;
  }
`;

export const LogoImage = styled.img`
  max-width: 168px;

  @media(max-width: 800px) {
    max-width: 105px;
  }
`;