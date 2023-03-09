import React, { useContext } from 'react';
import { API_IMAGES } from '../../constants/URL_FOR_MOVIES';
import { ThemeContext } from '../../components/colorsThemes/ThemesContext';
import { darkMode, lightMode } from '../../components/colorsThemes/ColorTheme';
import styles from './styles/style.module.scss';

export const ShowListMovies = ({ ...item }) => {
    const { isDark, theme } = useContext(ThemeContext);

    return (
        <div className={styles.card} style={{ background: isDark ? darkMode : lightMode }}>
            <img className={styles.img} src={`${API_IMAGES}` + item.backdrop_path} alt={item.backdrop_path} />
            <div className={styles.title}>
                <label style={{ color: isDark ? theme.text : '' }}>{item.original_title}</label>
                <h5 className={styles.average} style={{ color: isDark ? theme.text : '' }}>{item.vote_average}</h5>
            </div>
        </div>
    )
}