import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PhotoViewer} from "./PhotoApp/PhotoViewer";

function App() {
    return (

        <body className="body">
            <h1>Photo Viewer</h1>
            <PhotoViewer src="https://i.picsum.photos/id/466/200/200.jpg"/>
        </body>

    );
}

export default App;
