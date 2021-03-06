﻿import React, {useState} from "react";  // import React (to provide access to JSX)
import './PhotoViewer.css';

function PhotoViewer(props) {    // declare a new function called 'PhotoViewer'
    return (
        <div>               
            <h2>Selected Photo</h2>
            <img data-testid="largePhoto" className="largePhoto" src={props.src}/>
        </div>
    );
}

export {PhotoViewer};       // Export the function so that it can be imported in other files