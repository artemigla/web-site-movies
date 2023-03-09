import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';

export const RootProvider = () => {
    return (
        <>
            <Header logo={'Movies'} />
            <div><Outlet /></div>
        </>
    )
}