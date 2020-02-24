import React from "react";  // import React (to provide access to JSX)

function PhotoViewer() {    // declare a new function called 'PhotoViewer'
    return (
        <div>               
            <h2>Selected Photo</h2>
            <img src="https://i.picsum.photos/id/466/200/200.jpg"/>
        </div>
    );
}

export {PhotoViewer};       // Export the function so that it can be imported in other files