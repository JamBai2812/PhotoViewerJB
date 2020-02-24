import React from "react";  // import React (to provide access to JSX)
import './PhotoViewer.css';

function PhotoViewer(props) {    // declare a new function called 'PhotoViewer'
    return (
        <div>               
            <h2>Selected Photo</h2>
            <img className="largePhoto" src={props.src}/>
        </div>
    );
}

export {PhotoViewer};       // Export the function so that it can be imported in other files