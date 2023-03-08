import React from 'react';
import { API_IMAGES } from '../../constants/URL_FOR_MOVIES';
import styles from './styles/style.module.scss';

export const ShowListMovies = ({ ...item }) => {
    return (
        <div className={styles.card}>
            <img className={styles.img} src={`${API_IMAGES}` + item.backdrop_path} alt={item.backdrop_path} />
            <div className={styles.title}>
                <label>{item.original_title}</label>
                <h5 className={styles.average}>{item.vote_average}</h5>
            </div>
        </div>
    )
}