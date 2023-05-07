import React, {useReducer, useState} from "react";
import axios from "axios";

//simplify form in JSON format
const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
}

//Delete Song Page
function DeleteSong() {
    //hold user input
    const [formData, setFormData] = useReducer(formReducer, {});
    //trigger submitting values
    const [submitting, setSubmitting] = useState(false);
    //state for sending form data to backend
    const [post,setPost] = useState([]);

    //Pass JSON POST Request body through Axios
    const deletePost = (formData) => {
        axios
            .post("/removeSong",formData)
            .then((response) => {
                alert(response.data);
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
        deletePost(formData);
    };

    //Track changes in form input
    const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });
      }
     
    return (
        <div id = "main">
            <h1>Delete a Song</h1>
            <p>To delete a song, please enter the song's name</p>
            <form onSubmit={handleSubmit}>
                <label>Song Name:</label>
                <input type="text" id="name" name="name" maxLength="50" required onChange={handleChange} />
                <br/>
                <button type="submit">Delete</button>
                <br/>
            </form>

        </div>
    );

}

export default DeleteSong;