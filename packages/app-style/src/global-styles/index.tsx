import React, { Fragment, FC } from 'react';
import { Reset } from './reset';
import { BoxSizing } from './box-sizing';
import { Typography } from './typography';
import { Vendor } from './vendor';
export const GlobalStyles: FC = () => {
  return (
    <Fragment>
      <Reset />
      <BoxSizing />
      <Typography />
      <Vendor />
    </Fragment>
  );
};
