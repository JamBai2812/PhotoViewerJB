import React, {useState} from "react";  // import React (to provide access to JSX)
import {ImageUrls} from "./ImageData";
import './PhotoCollection.css';
import {Thumbnail} from "./Thumbnail";

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
    
    
    
    
    const imageList = ImageUrls
        .map((url, index)=> 
            <li className="thumbnailListItem" onClick={() => props.setSelectedURL(url)} key={index}>
                <Thumbnail src={url} isSelected={url===props.selectedURL} />
            </li>
            );
    
    
    return (
        <ul className="photoContainer">
            {imageList}
        </ul>
    );
}

export {PhotoCollection};       // Export the function so that it can be imported in other files