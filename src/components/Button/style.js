import styled from 'styled-components';

const Button = styled.button`
  color: var(--color-white);
  border: 1px solid var(--color-white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  a {
    height: 100%;
    width: 100%;
  }

  &:hover,
  &:focus {
    opacity: .5;
  }

  @media(max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-primary);
    color: var(--color-white);
    border-radius: 0;
    border: none;
    text-align: center;
    z-index: 1;
  }
`;

export default Button;