import React from 'react';

import { Container, Ellipse } from './Loader.styles.js';

interface LoaderProps {
  absolute: boolean;
  status: boolean
}

const Loader: React.FC<LoaderProps> = ({ absolute = false, status }) => {
  return (
    <Container data-testid="loader"
      absolute={absolute}
      status={status}
      >
      <Ellipse></Ellipse>
      <Ellipse></Ellipse>
      <Ellipse></Ellipse>
      <Ellipse></Ellipse>
    </Container>
  );
};

export default Loader;
