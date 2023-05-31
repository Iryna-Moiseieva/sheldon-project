import React from 'react';

// import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import Header from '../../components/Header';
import MainPage from '../../pages/MainPage';

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
      <Header />
      <MainPage />
    </>
  );
};

export default App;
