import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../components/colorsThemes/ThemesContext';
import { ShowListMovies } from './ShowListMovies';
import axios from 'axios';
import { URL, KEY, LANGUAGE, PAGE } from '../../constants/URL_FOR_MOVIES';
import styles from './styles/style.module.scss';

export const Movies = () => {
    const { isDark, theme } = useContext(ThemeContext);
    const [state, setState] = useState([]);
    useEffect(() => {
        axios.get(`${URL}?api_key=${KEY}&language=${LANGUAGE}&page=${PAGE}`)
            .then(responce => responce.data)
            .then(responce => setState(responce.results))
            .catch(err => console.log(err))
    }, []);

    return (
        <main className={styles.container} style={{ background: isDark ? theme.background : theme.background }}>
            <div className={styles.leftSidebar}>

            </div>
            <div className={styles.content}>
                {state.map((item) => (
                    <ShowListMovies
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
            <div className={styles.rightSidebar}>

            </div>
        </main>
    )
}