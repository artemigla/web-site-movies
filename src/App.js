import React from 'react';
import { Header } from './components/header/Header';
import styles from './style.module.scss';

export const App = () => {

  return (
    <div className={styles.container}>
      <Header logo={"Movies"} />
    </div>
  );
}

export default App;