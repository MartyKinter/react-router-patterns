import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';

function SiteRoutes({dogs}){
    return (
        <Routes>
            <Route exact path="/dogs" element={<DogList dogs={dogs}/>}>
            </Route>
            <Route path="/dogs/:name" element={<FilterDogDetails dogs={dogs}/>}>
            </Route>
            <Route path="*" element={<Navigate to="/dogs"/>}>
            </Route>
        </Routes>
    );
}

export default SiteRoutes;