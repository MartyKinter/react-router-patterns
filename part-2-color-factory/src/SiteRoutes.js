import React, {useState, useEffect} from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";

const DEFAULT_COLORS = {
    red: "#FF0000",
    green: "#00ff00",
    blue: "#0000ff"
}

function SiteRoutes(){
    const initialColors = JSON.parse(localStorage.getItem("colors")) || DEFAULT_COLORS;
    const [colors, setColors] = useState(initialColors);

    useEffect(
        function syncColorsToLocalStorage(){
            return localStorage.setItem("colors", JSON.stringify(colors));
        }, [colors]
    );

    function handleAdd(newColorObj){
        setColors(prevColors => ({...prevColors, ...newColorObj}));
    }

    return (
        <Routes>
            <Route exact path='/' element={<Navigate to="/colors"/>}/>
            <Route exact path='/colors' element={<ColorList colors={colors}/>}/>
            <Route exact path='/colors/new' element={<NewColorForm addColor={handleAdd}/>}/>
            <Route exact path='/colors/:color' element={<Color colors={colors}/>}/>
            <Route exact path='*' element={<Navigate to="/colors"/>}/>
        </Routes>
    );

}

export default SiteRoutes;