import React, { useState, useEffect } from 'react';
import { KEY, LANGUAGE, URL, PAGE } from '../../constants/URL_FOR_MOVIES';
import { ShowListMovies } from './ShowListMovies';
import axios from 'axios';
import styles from './styles/style.module.scss';

export const Content = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        axios.get(`${URL}?api_key=${KEY}&language=${LANGUAGE}&${PAGE}`)
            .then(responce => responce.data)
            .then(responce => setState(responce.results))
            .catch(err => console.log(err))
    }, []);

    return (
        <main className={styles.container}>
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