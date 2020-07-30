import React from 'react';
import WrapperMain from './style';

function Main({children}) {
  return (
    <WrapperMain>
      {children}
    </WrapperMain>
  );
}

export default Main;