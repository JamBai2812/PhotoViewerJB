import React, {useState} from "react";  // import React (to provide access to JSX)
import {ImageUrls} from "./ImageData";
import './PhotoCollection.css';

function PhotoCollection(props) {  
    
    
    // function isSelected(img){
    //     return img.src === props.selectedURL;
    // }
    //
    // function getCssClass(img){
    //     let cssClass = "";
    //
    //     if(isSelected(img)){
    //         return "thumbnail selected";
    //     }
    //     else{
    //         return "thumbnail";
    //     }
    // }
    
    
    const imageList = ImageUrls.map(url => <img className="thumbnail" src={url} alt="an image" onClick={() => props.setSelectedURL(url)}/>);
    
    
    
    imageList.forEach(img => {
            if (img.src === props.selectedURL) {
                img.className += " selected";
            }
        }
    );
    
    
    return (
        <div className="photoContainer">
            {imageList}
        </div>
    );
}

export {PhotoCollection};       // Export the function so that it can be imported in other files