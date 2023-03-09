import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { RootProvider } from '../rootprovider/RootProvider';
import { Movies } from '../../pages/movies/Movies';
import { TvShow } from '../../pages/tvshows/TvShow';
import { Discovery } from '../../pages/discover/Discovery';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootProvider />}>
            <Route path='/' index element={<Movies />} />
            <Route path='/tvshow' element={<TvShow />} />
            <Route path='/discovery' element={<Discovery />} />
        </Route>
    )
)