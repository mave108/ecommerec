import React from 'react';
import Header from '../header';
import Nav from '../nav';

const BaseLayout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <main>
        <Header>
          <Nav />
        </Header>
        <div className="wrapper">{children}</div>
      </main>
    </>
  );
};

export default BaseLayout;
