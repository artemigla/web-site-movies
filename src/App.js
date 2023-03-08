import React from 'react';
import { Header } from './components/header/Header';
import styles from './style.module.scss';
import { ThemeProvider } from './components/colorsThemes/ThemesContext';
import { Content } from './components/content/Content';
export const App = () => {

  return (
    <ThemeProvider>
      <div className={styles.container}>
        <Header logo={"Movies"} />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;