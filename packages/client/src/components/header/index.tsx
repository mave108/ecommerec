import React from 'react';
import Headroom from 'react-headroom';
import { HeaderStyled } from './styled';

const Header: React.FC<{}> = ({ children }) => {
  return (
    <header>
      <Headroom
        style={{
          transition: 'all .5s ease-in-out',
        }}
      >
        <HeaderStyled>{children}</HeaderStyled>
      </Headroom>
    </header>
  );
};

export default Header;
