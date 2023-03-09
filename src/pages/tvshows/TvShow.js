import React, { useContext } from 'react';
import { ThemeContext } from '../../components/colorsThemes/ThemesContext';
import { darkMode, lightMode } from '../../components/colorsThemes/ColorTheme';
import styles from './styles/style.module.scss';

export const TvShow = () => {
    const { isDark } = useContext(ThemeContext);
    return (
        <main className={styles.container} style={{ background: isDark ? darkMode.background : lightMode.background }}>
            <h3 style={{ color: isDark ? darkMode.text : lightMode.text }}>TV Show</h3>
        </main>
    )
}