import React from 'react';
import { Header, Nav as Gnav, Anchor, Menu } from 'grommet';
import { Notification, ChatOption, Cart } from 'grommet-icons';

const Nav: React.FC<{}> = ({ children }) => {
  return (
    <nav>
      <Header pad="small">
        <Gnav direction="row" background="brand" pad="medium">
          <Anchor label="Home" icon={<Notification />} />
          <Anchor label="About Us" icon={<ChatOption />} />
          <Anchor label="Chat Us" icon={<Cart />} />
        </Gnav>
      </Header>
    </nav>
  );
};

export default Nav;
