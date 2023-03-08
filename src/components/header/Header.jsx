import React, { useContext } from 'react';
import styles from './styles/style.module.scss';
import { darkMode, lightMode } from '../colorsThemes/ColorTheme';
import { ThemeContext } from '../colorsThemes/ThemesContext';

export const Header = ({ logo }) => {

    const { isDark, toggle } = useContext(ThemeContext);
    const clickTheme = () => toggle(!isDark);

    return (
        <header className={styles.container} style={{ background: isDark ? darkMode.background : lightMode.background }}>
            <div className={styles.logo} style={{ color: isDark ? darkMode.text : lightMode.text }}>
                <b>{logo}<span className={styles.span}>NET</span></b>
            </div>
            <div className={styles.categories}>
                <nav className={styles.navigation} style={{ color: isDark ? darkMode.text : lightMode.text }}>
                    <p>Movies</p>
                    <p>TV Shows</p>
                    <p>Anime</p>
                </nav>
                <div className={styles.searchWrapper}>
                    <input
                        type={'search'}
                        className={styles.search}
                        placeholder={'Search...'}
                    />
                </div>
            </div>
            <div className={styles.rightSidebar}>
                <label className={styles.checkedTheme}>
                    <input type={'checkbox'} onChange={clickTheme} />
                    <span className={styles.check}></span>
                </label>
            </div>
        </header>
    )
}