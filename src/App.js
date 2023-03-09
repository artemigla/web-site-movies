import React from 'react';
import styles from './style.module.scss';
import { ThemeProvider } from './components/colorsThemes/ThemesContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/router/router';

export const App = () => {
  return (
    <ThemeProvider className={styles.container}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
