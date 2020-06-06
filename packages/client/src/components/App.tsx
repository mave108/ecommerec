import React from 'react';
import { hot } from 'react-hot-loader';
import { Link, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import logo from './logo.png';
import { AsyncAboutPage, AsyncHomePage } from '../pages';
import BaseLayout from './layout/base-layout';
import { createTheme } from '../theme/alan';
import { Grommet } from 'grommet';
import { aruba } from '../theme/aruba';
// import { GlobalStyles } from '../theme/alan/global-styles';

const theme = createTheme();
export class RootApp extends React.Component<{}, {}> {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        {/* <GlobalStyles /> */}
        <Grommet theme={aruba}>
          <BaseLayout>
            <Route exact path="/" component={AsyncHomePage} />
            <Route path="/about" component={AsyncAboutPage} />

            <img src={logo} />
            <div>links</div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </BaseLayout>
        </Grommet>
      </ThemeProvider>
    );
  }
}

export const App = hot(module)(RootApp);
