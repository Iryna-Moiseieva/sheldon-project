import React from 'react';

import './App.css';
import Loader from '../../components/Loader';

interface AppProps {
  absolute: boolean;
}
const App: React.FC<AppProps> = ({ absolute = false }) => {

  return (
    <>
      <h1 className="app">Sheldon Project</h1>;
      <Loader absolute={absolute}/>
    </>
  );
};

export default App;
