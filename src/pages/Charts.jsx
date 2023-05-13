import React from "react";
import { Link } from "react-router-dom";
function Charts(){
    return (
        <div>
            <h1>Charts</h1>
            <p>Click on one of the buttons to view a chart.</p>
            <Link to="/countUnitSongs">
                <button>Count Unit Songs</button>
            </Link>
        </div>

    );
}

export default Charts;