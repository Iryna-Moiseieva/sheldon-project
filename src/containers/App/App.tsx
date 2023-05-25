import React from 'react';

// import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import Header from '../../components/Header';

const App: React.FC = () => {

  const onClose = () => {
    return (
      <p>Hello</p>
    );
  };

  return (
    <>
      {/* <Loader /> */}
      {false && <Modal onClose={onClose} />}
      <Header/>
    </>
  );
};

export default App;
