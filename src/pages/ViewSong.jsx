import React, {useReducer, useState} from "react";
import axios from "axios";

//simplify form in JSON format
const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
}

//Variables for storing song data
var songName = ""; var unitID = ""; var songLength = "";
var releaseDate = ""; var composer1 = ""; var composer2 = "";
var lyricist1 = ""; var lyricist2 = ""; 
var arranger1 = "";  var arranger2 = ""; var bpm = 0; 
var songCategory = ""; var singer1 = ""; var singer2 = ""; 
var singer3 = ""; var singer4 = ""; var singer5 = ""; 
var singer6 = ""; var songDesc = "";

//View Song Page
function ViewSong() {
    //hold user input
    const [formData, setFormData] = useReducer(formReducer, {});
    //trigger submitting values
    const [submitting, setSubmitting] = useState(false);
    //state for sending form data to backend
    const [post,setPost] = useState([]);

    //render fields in React
    const renderFields = (songData) => {
        const data = songData;
        console.log(data);
        //If a song wasn't found, alert the user
        //Set remianing fields to NULL
        if((data === "Invalid song name.") || (data === "Song doesn't exist.") ){
            songName = data; unitID = ""; songLength = "";
            releaseDate = ""; composer1 = ""; composer2 = "";
            lyricist1 = ""; lyricist2 = "";
            arranger1 = "";  arranger2 = ""; bpm = 0; 
            songCategory = ""; singer1 = ""; singer2 = ""; 
            singer3 = ""; singer4 = ""; singer5 = ""; 
            singer6 = ""; songDesc = "";
        }
        else{
           //Otherwise, populate all fields with retrieved data
           songName = data['name']; unitID = data['unit']; 
           songLength = data['length']; releaseDate = data['release_date']; 
           composer1 = data['composer1']; composer2 = data['composer2'];
           lyricist1 = data['lyricist1']; lyricist2 = data['lyricist2']; 
           arranger1 = data['arranger1'];  arranger2 = data['arranger2']; 
           bpm = data['bpm']; songCategory = data['song_category']; 
           singer1 = data['singer1']; singer2 = data['singer2']; 
           singer3 = data['singer3']; singer4 = data['singer4']; 
           singer5 = data['singer5']; singer6 = data['singer6']; 
           songDesc = data['song_desc'];

        }
    };

    //Pass Song Name through Axios
    const getSong = (formData) => {
        axios
            .post("/getSong", formData)
            .then((response) => {
                setPost(response.data);
                renderFields(response.data);
            });
    };

    if(!post) return "No post!"

    //submit data
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
        setSubmitting(false);
        }, 3000); 
        getSong(formData);
    };

    //Track changes in form input
    const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });
    }

    return (
        
        <div>
            <h1>View Song</h1>
            <p>Enter a song name and click search</p>
            <form onSubmit={handleSubmit}>
                <label>Song Name:</label>
                <input type="text" id="name" name="name" maxLength="50" required onChange={handleChange} />
                <br/>
                <button type="submit">Search</button>
                <br/>
            </form>

            <h2>Song Name: {songName}</h2>
            <h3>Unit: </h3> <p>{unitID}</p>   
            <h3>Length: </h3> <p>{songLength}</p> 
            <h3>Release Date: </h3> <p>{releaseDate}</p> 
            <h3>Composers: </h3> <p>{composer1}, {composer2}</p> 
            <h3>Lyricists: </h3> <p>{lyricist1}, {lyricist2}</p> 
            <h3>Arrangers: </h3> <p>{arranger1}, {arranger2}</p> 
            <h3>BPM: </h3> <p>{bpm}</p> 
            <h3>Category: </h3> <p>{songCategory}</p> 
            <h3>Singers</h3>
            <p>{singer1}, {singer2}, {singer3}, {singer4}, {singer5}, {singer6}</p>
            <h3>Brief Description</h3>
            <p>{songDesc}</p>
        </div>
    );
}

export default ViewSong;