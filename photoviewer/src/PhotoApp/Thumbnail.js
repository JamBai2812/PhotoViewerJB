import React, {useState} from "react";  // import React (to provide access to JSX)
import './PhotoCollection.css';
import {PhotoCollection} from "./PhotoCollection";

function Thumbnail(props) {  
    
    return <img data-testid="thumbnailListItem" className={"thumbnail" + (props.isSelected ? " selected" : "")} src={props.src} alt="an image"/>;
    
}

export {Thumbnail};