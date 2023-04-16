import React from 'react';

import { Container, Ellipse } from './Loader.styles.js';

interface LoaderProps {
  absolute: boolean;
}

const Loader: React.FC<LoaderProps> = ({ absolute = false }) => {
  return (
    <Container absolute={absolute} data-testid="loader">
      <Ellipse></Ellipse>
      <Ellipse></Ellipse>
      <Ellipse></Ellipse>
      <Ellipse></Ellipse>
    </Container>
  );
};

export default Loader;
