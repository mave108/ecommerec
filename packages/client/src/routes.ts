import React, { ReactNode } from 'react';

export interface RoutesType {
  path: string;
  component: ReactNode;
  private: boolean;
  exact?: boolean;
  data?: object;
  redirectTo?: string;
}
const Routes: Array<RoutesType> = [];
export default Routes;
