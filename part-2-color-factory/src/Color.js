import React from "react";
import {Link, useParams, Navigate} from "react-router-dom";
import "./Color.css";

function Color({colors}){
    const {color} = useParams();
    const hex = colors[color];

    if(!hex){
        return <Navigate to="/colors"/>
    }

    return(
        <div className="Color" style={{backgroundColor: hex}}>
            <p>this is {color} </p>
            <p>Isn't it beautiful?</p>
            <p>
                <Link to="/">Go back</Link>
            </p>
        </div>
    );
}

export default Color;