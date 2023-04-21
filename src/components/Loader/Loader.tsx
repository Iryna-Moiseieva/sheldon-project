import React from 'react';

import { Container, Ellipse } from './Loader.styles.js';

const Loader: React.FC = () => {
  return (
    <Container data-testid="loader">
      <Ellipse></Ellipse>
      <Ellipse></Ellipse>
      <Ellipse></Ellipse>
      <Ellipse></Ellipse>
    </Container>
  );
};

export default Loader;
