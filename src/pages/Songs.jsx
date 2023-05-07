import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

//Songs Page
function Songs() {
    //Retrieve results from Flask GET Query
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        axios.get("/getAllSongs").then((response) => {
            setPost(response.data);
        });
    }, []);

    //return NULL if query fails
    if (!post) return null;
    //Convert message body into array of JSON objects
    const data = JSON.parse(post.body);
    console.log(data);
    //table keys or JSON keys
    const headers = Object.keys(data[0]);
    return (
        <div>
            <h1>Songs</h1>
            <p>This table shows songs featured in the game.</p>
            <p>Users can add, view, modify and delete song data here.</p>
            <Link to="/addsong">
                <button>Add a Song</button>
            </Link>
            <Link to="/viewsong">
                <button>View a Song</button>
            </Link>
            <Link to="/updatesong">
                <button>Update a Song</button>
            </Link>
            <Link to="/deletesong">
                <button>Delete a Song</button>
            </Link>
            <table>
                <thead>
                    <tr>
                        {headers.map(heading => {
                            return <th key={heading}>{heading}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => {
                        return <tr key={index}>
                            {headers.map((key, index) => {
                                return <td key={row[key]}>{row[key]}</td>
                            })}
                        </tr>;
                    })}
                </tbody>
            </table>    
        </div>
    );
}

export default Songs;