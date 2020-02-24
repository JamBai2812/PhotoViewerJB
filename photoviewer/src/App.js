import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {PhotoViewer} from "./PhotoApp/PhotoViewer";
import {PhotoCollection} from "./PhotoApp/PhotoCollection";

function App() {
    
    const [selectedURL, setSelectedURL] = useState("");
    
    return (

        <body className="body">
            <h1>Photo Viewer</h1>
            <PhotoViewer src={selectedURL}/>
            <h2>Selected URL: {selectedURL}</h2>
            <PhotoCollection selectedURL={selectedURL} setSelectedURL={setSelectedURL}/>
        </body>

    );
}

export default App;
