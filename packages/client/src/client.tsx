import React from 'react';
import { hydrate } from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import './style.css';
import { Grommet } from 'grommet';
import { aruba } from './theme/aruba';

const component = (
  <BrowserRouter>
    <Grommet theme={aruba}>
      <App />
    </Grommet>
  </BrowserRouter>
);

Loadable.preloadReady().then(() => {
  hydrate(component, document.getElementById('root'));
});
