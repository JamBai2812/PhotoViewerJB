import React, {useState} from "react";  // import React (to provide access to JSX)
import './PhotoCollection.css';
import {PhotoCollection} from "./PhotoCollection";

function Thumbnail(props) {  
    
    return <img className={"thumbnail" + (props.isSelected ? " selected" : "")} src={props.src} alt="an image"/>;
    
}

export {Thumbnail};