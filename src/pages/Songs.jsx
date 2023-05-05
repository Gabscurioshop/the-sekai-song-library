import React from 'react';
import { Link } from "react-router-dom";

//Songs Page
function Songs() {
    return (
        <div>
            <h1>Songs</h1>
            <p>This table shows songs featured in the game.</p>
            <p>Users can add, view, modify and delete song data here.</p>
            <Link to="/addsong">
                <button>Add a Song</button>
            </Link>
        </div>
    );
}

export default Songs;