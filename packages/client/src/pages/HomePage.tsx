import React from 'react';
import { hot } from 'react-hot-loader';
import { Attraction, Car, TreeOption } from 'grommet-icons';
import { Grommet, Box, Carousel } from 'grommet';

export class HomePage extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <CustomCarousel />
        Home Page
      </div>
    );
  }
}

export default hot(module)(HomePage);

const CustomCarousel = ({ ...rest }) => (
  <Box align="center" pad="large">
    <Carousel {...rest}>
      <Box pad="xlarge" background="accent-1">
        <Attraction size="xlarge" />
      </Box>
      <Box pad="xlarge" background="accent-2">
        <TreeOption size="xlarge" />
      </Box>
      <Box pad="xlarge" background="accent-3">
        <Car size="xlarge" />
      </Box>
    </Carousel>
  </Box>
);
