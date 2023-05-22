import React from 'react';

// import Loader from '../../components/Loader';
import Modal from '../../components/Modal';

const App: React.FC = () => {

  const onClose = () => {
    return (
      <p>Hello</p>
    );
  };

  return (
    <>
      <h1 className="app">Sheldon Project</h1>
      {/* <Loader /> */}
      {true && <Modal onClose={ onClose} />}
    </>
  );
};

export default App;
