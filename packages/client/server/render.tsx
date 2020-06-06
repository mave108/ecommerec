import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Loadable from 'react-loadable';
import { StaticRouter } from 'react-router';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { App } from '../src/components/App';
import { HtmlBuilder } from './htmlBuilder';

let reactLoadableStats: any = {};

// react-loadable doesnt get passed by webpack-dev-middleware
if (process.env.NODE_ENV === 'development') {
  // tslint:disable-next-line:no-var-requires
  reactLoadableStats = require('./react-loadable.json');
}

export default function serverRenderer(stats: any): express.RequestHandler {
  // allow react-loadable to load stats file in development
  if (process.env.NODE_ENV === 'development') {
    stats = reactLoadableStats;
  }
  //get style genrated by styled-components
  const sheet = new ServerStyleSheet();

  // cache html string and append async chunks on request
  const html = new HtmlBuilder(stats);

  return (req, res, next) => {
    const modules: any[] = [];
    const context: {} = {};

    const component = renderToString(
      sheet.collectStyles(
        <Loadable.Capture report={(moduleName: any) => modules.push(moduleName)}>
          <StaticRouter context={context} location={req.url}>
            <StyleSheetManager sheet={sheet.instance}>
              <App />
            </StyleSheetManager>
          </StaticRouter>
        </Loadable.Capture>
      )
    );
    const styledComponents = sheet.getStyleTags();
    res.send(html.renderToString(component, modules, styledComponents));
  };
}
