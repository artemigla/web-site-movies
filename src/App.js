import React from 'react';
import { Header } from './components/header/Header';
import styles from './style.module.scss';
import { ThemeProvider } from './components/colorsThemes/ThemesContext';
export const App = () => {

  return (
    <ThemeProvider>
      <div className={styles.container}>
        <Header logo={"Movies"} />
      </div>
    </ThemeProvider>
  );
}

export default App;