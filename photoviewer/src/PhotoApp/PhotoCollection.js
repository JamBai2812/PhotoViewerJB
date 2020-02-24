import React from "react";  // import React (to provide access to JSX)
import {ImageUrls} from "./ImageData";
import './PhotoCollection.css';

function PhotoCollection() {  
    
    const imageList = ImageUrls.map(url => <img className="thumbnail" src={url} alt="an image"/>);
    
    return (
        <div className="photoContainer">
            {imageList}
        </div>
    );
}

export {PhotoCollection};       // Export the function so that it can be imported in other files