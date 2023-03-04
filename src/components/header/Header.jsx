import React from 'react';
import styles from './styles/style.module.scss';

export const Header = ({ logo }) => {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <b>{logo}<span className={styles.span}>NET</span></b>
            </div>
            <div className={styles.categories}>
                <nav className={styles.navigation}>
                    <p>Movies</p>
                    <p>TV Shows</p>
                    <p>Anime</p>
                </nav>
                <div className={styles.searchWrapper}>
                    <input
                        className={styles.search}
                        placeholder={'Search...'}
                    />
                </div>
            </div>
            <div className={styles.rightSidebar}>

            </div>
        </header>
    )
}