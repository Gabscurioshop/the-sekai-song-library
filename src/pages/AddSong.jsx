import React, {useReducer, useState} from "react";
import axios from "axios";

//Song Submission Form Page

function AddSong() {
    //simplify form in JSON format
    const formReducer = (state, event) => {
        return {
          ...state,
          [event.name]: event.value
        }
    }

    //hold user input
    const [formData, setFormData] = useReducer(formReducer, {});

    //trigger submitting values
    const [submitting, setSubmitting] = useState(false);
    //state for sending form data to backend
    const [post, setPost] = useState([]);

    //Pass JSON POST Request body through Axios
    const createSong = (formData) => {
        axios
            .post("postSong", formData)
            .then((response) => {
                alert(response.data.body);
            });
    };
    if(!post) return "No song posted!"

    //submit song data
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
        setSubmitting(false);
        }, 3000); 
        console.log(formData);
        //createSong(formData);
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
            <h1>Add a Song</h1>
            <p>To add a song, please fill out the following fields:</p>
            <br/>

            <form onSubmit={handleSubmit}>
            <label>Song Name: </label>
            <input type="text" id="name" name="name" maxLength="50" required onChange={handleChange}/>
            <span> Format: 50 characters max</span>

            <br/>
            <br/>
            <label>Unit:</label>
            <select name="unit" id="unit" required onChange={handleChange}>
                <option value="" defaultValue="">-Select a Unit-</option>
                <option value="VS" defaultValue="VS">VIRTUAL SINGER</option>
                <option value="LN">Leo/need</option>
                <option value="MMJ">MORE MORE JUMP!</option>
                <option value="VBS">Vivid BAD SQUAD</option>
                <option value="WXS">Wonderlands x Showtime</option>
                <option value="N25">Nightcord at 25:00</option>
                <option value="MIX">Mixed Unit</option>
            </select>
            <span> If human singers from different units perform a song together, select Mixed Unit</span>
            <br/>
            <br/>
            <label>Singers: </label>
            <select name="singer1" id="singer1" required onChange={handleChange}>
                    <option defaultValue="">Singer1</option>
                    <option value="VS">VIRTUAL SINGER</option><option value="VS-01">Miku</option><option value="VS-02">Rin</option><option value="VS-03">Len</option><option value="VS-04">Luka</option><option value="VS-05">MEIKO</option><option value="VS-06">KAITO</option>
                    <option value="LN">Leo/need</option><option value="LN-01">Ichika</option><option value="LN-02">Saki</option><option value="LN-03">Honami</option><option value="LN-04">Shiho</option>
                    <option value="MMJ">MORE MORE JUMP!</option><option value="MMJ-01">Minori</option><option value="MMJ-02">Haruka</option><option value="MMJ-03">Airi</option><option value="MMJ-04">Shizuku</option>
                    <option value="VBS">Vivid BAD SQUAD</option><option value="VBS-01">Kohane</option><option value="VBS-02">An</option><option value="VBS-03">Akito</option><option value="VBS-04">Toya</option>
                    <option value="WXS">Wonderlands x Showtime</option><option value="WXS-01">Tsukasa</option><option value="WXS-02">Emu</option><option value="WXS-03">Nene</option><option value="WXS-04">Rui</option>
                    <option value="N25">Nightcord at 25:00</option><option value="N25-01">Kanade</option><option value="N25-02">Mafuyu</option><option value="N25-03">Ena</option><option value="N25-04">Mizuki</option>
            </select>
            <select name="singer2" id="singer2" onChange={handleChange}>
                    <option defaultValue="">Singer2</option>
                    <option value="VS">VIRTUAL SINGER</option><option value="VS-01">Miku</option><option value="VS-02">Rin</option><option value="VS-03">Len</option><option value="VS-04">Luka</option><option value="VS-05">MEIKO</option><option value="VS-06">KAITO</option>
                    <option value="LN">Leo/need</option><option value="LN-01">Ichika</option><option value="LN-02">Saki</option><option value="LN-03">Honami</option><option value="LN-04">Shiho</option>
                    <option value="MMJ">MORE MORE JUMP!</option><option value="MMJ-01">Minori</option><option value="MMJ-02">Haruka</option><option value="MMJ-03">Airi</option><option value="MMJ-04">Shizuku</option>
                    <option value="VBS">Vivid BAD SQUAD</option><option value="VBS-01">Kohane</option><option value="VBS-02">An</option><option value="VBS-03">Akito</option><option value="VBS-04">Toya</option>
                    <option value="WXS">Wonderlands x Showtime</option><option value="WXS-01">Tsukasa</option><option value="WXS-02">Emu</option><option value="WXS-03">Nene</option><option value="WXS-04">Rui</option>
                    <option value="N25">Nightcord at 25:00</option><option value="N25-01">Kanade</option><option value="N25-02">Mafuyu</option><option value="N25-03">Ena</option><option value="N25-04">Mizuki</option>
            </select>
            <select name="singer3" id="singer3" onChange={handleChange}>
                    <option defaultValue="">Singer3</option>
                    <option value="VS">VIRTUAL SINGER</option><option value="VS-01">Miku</option><option value="VS-02">Rin</option><option value="VS-03">Len</option><option value="VS-04">Luka</option><option value="VS-05">MEIKO</option><option value="VS-06">KAITO</option>
                    <option value="LN">Leo/need</option><option value="LN-01">Ichika</option><option value="LN-02">Saki</option><option value="LN-03">Honami</option><option value="LN-04">Shiho</option>
                    <option value="MMJ">MORE MORE JUMP!</option><option value="MMJ-01">Minori</option><option value="MMJ-02">Haruka</option><option value="MMJ-03">Airi</option><option value="MMJ-04">Shizuku</option>
                    <option value="VBS">Vivid BAD SQUAD</option><option value="VBS-01">Kohane</option><option value="VBS-02">An</option><option value="VBS-03">Akito</option><option value="VBS-04">Toya</option>
                    <option value="WXS">Wonderlands x Showtime</option><option value="WXS-01">Tsukasa</option><option value="WXS-02">Emu</option><option value="WXS-03">Nene</option><option value="WXS-04">Rui</option>
                    <option value="N25">Nightcord at 25:00</option><option value="N25-01">Kanade</option><option value="N25-02">Mafuyu</option><option value="N25-03">Ena</option><option value="N25-04">Mizuki</option>
            </select>
            <select name="singer4" id="singer4" onChange={handleChange}>
                    <option defaultValue="">Singer4</option>
                    <option value="VS">VIRTUAL SINGER</option><option value="VS-01">Miku</option><option value="VS-02">Rin</option><option value="VS-03">Len</option><option value="VS-04">Luka</option><option value="VS-05">MEIKO</option><option value="VS-06">KAITO</option>
                    <option value="LN">Leo/need</option><option value="LN-01">Ichika</option><option value="LN-02">Saki</option><option value="LN-03">Honami</option><option value="LN-04">Shiho</option>
                    <option value="MMJ">MORE MORE JUMP!</option><option value="MMJ-01">Minori</option><option value="MMJ-02">Haruka</option><option value="MMJ-03">Airi</option><option value="MMJ-04">Shizuku</option>
                    <option value="VBS">Vivid BAD SQUAD</option><option value="VBS-01">Kohane</option><option value="VBS-02">An</option><option value="VBS-03">Akito</option><option value="VBS-04">Toya</option>
                    <option value="WXS">Wonderlands x Showtime</option><option value="WXS-01">Tsukasa</option><option value="WXS-02">Emu</option><option value="WXS-03">Nene</option><option value="WXS-04">Rui</option>
                    <option value="N25">Nightcord at 25:00</option><option value="N25-01">Kanade</option><option value="N25-02">Mafuyu</option><option value="N25-03">Ena</option><option value="N25-04">Mizuki</option>
            </select>
            <select name="singer5" id="singer5" onChange={handleChange}>
                    <option defaultValue="">Singer5</option>
                    <option value="VS">VIRTUAL SINGER</option><option value="VS-01">Miku</option><option value="VS-02">Rin</option><option value="VS-03">Len</option><option value="VS-04">Luka</option><option value="VS-05">MEIKO</option><option value="VS-06">KAITO</option>
                    <option value="LN">Leo/need</option><option value="LN-01">Ichika</option><option value="LN-02">Saki</option><option value="LN-03">Honami</option><option value="LN-04">Shiho</option>
                    <option value="MMJ">MORE MORE JUMP!</option><option value="MMJ-01">Minori</option><option value="MMJ-02">Haruka</option><option value="MMJ-03">Airi</option><option value="MMJ-04">Shizuku</option>
                    <option value="VBS">Vivid BAD SQUAD</option><option value="VBS-01">Kohane</option><option value="VBS-02">An</option><option value="VBS-03">Akito</option><option value="VBS-04">Toya</option>
                    <option value="WXS">Wonderlands x Showtime</option><option value="WXS-01">Tsukasa</option><option value="WXS-02">Emu</option><option value="WXS-03">Nene</option><option value="WXS-04">Rui</option>
                    <option value="N25">Nightcord at 25:00</option><option value="N25-01">Kanade</option><option value="N25-02">Mafuyu</option><option value="N25-03">Ena</option><option value="N25-04">Mizuki</option>
            </select>
            <select name="singer6" id="singer6" onChange={handleChange}>
                    <option defaultValue="">Singer6</option>
                    <option value="VS">VIRTUAL SINGER</option><option value="VS-01">Miku</option><option value="VS-02">Rin</option><option value="VS-03">Len</option><option value="VS-04">Luka</option><option value="VS-05">MEIKO</option><option value="VS-06">KAITO</option>
                    <option value="LN">Leo/need</option><option value="LN-01">Ichika</option><option value="LN-02">Saki</option><option value="LN-03">Honami</option><option value="LN-04">Shiho</option>
                    <option value="MMJ">MORE MORE JUMP!</option><option value="MMJ-01">Minori</option><option value="MMJ-02">Haruka</option><option value="MMJ-03">Airi</option><option value="MMJ-04">Shizuku</option>
                    <option value="VBS">Vivid BAD SQUAD</option><option value="VBS-01">Kohane</option><option value="VBS-02">An</option><option value="VBS-03">Akito</option><option value="VBS-04">Toya</option>
                    <option value="WXS">Wonderlands x Showtime</option><option value="WXS-01">Tsukasa</option><option value="WXS-02">Emu</option><option value="WXS-03">Nene</option><option value="WXS-04">Rui</option>
                    <option value="N25">Nightcord at 25:00</option><option value="N25-01">Kanade</option><option value="N25-02">Mafuyu</option><option value="N25-03">Ena</option><option value="N25-04">Mizuki</option>
            </select>
        
            <br/>
            <span>You can select up to six singers</span>
            <br/>
            <br/>
            <label>Length of Song: </label>
            <input type="number" id="min" name="min" min="0" max="9" onChange={handleChange}/> minutes,     <input type="number" id="sec" name="sec" min="0" max="59" onChange={handleChange} /> seconds
            <br/>
            <span> Format: 9 minutes, 59 seconds max</span>   

            <br/>
            <br/>
            <label>Release Date: </label>
            <input type="date" name="date" id="date" min="2020-09-01" required onChange={handleChange} />

            <br/>
            <br/>
            <label>Composer(s): </label>
            <input type="text" id="composer1" name="composer1" maxLength="50" required onChange={handleChange}/>
            <input type="text" id="composer2" name="composer2" maxLength="50" onChange={handleChange}/>
            <span> Format: 50 characters max</span>

            <br/>
            <br/>
            <label>Lyricist(s): </label>
            <input type="text" id="lyricist1" name="lyricist1" maxLength="50" onChange={handleChange}/>
            <input type="text" id="lyricist2" name="lyricist2" maxLength="50" onChange={handleChange}/>
            <span> Format: 50 characters max</span>

            <br/>
            <br/>
            <label>Arranger(s): </label>
            <input type="text" id="arranger1" name="arranger1" maxLength="50" onChange={handleChange}/>
            <input type="text" id="arranger2" name="arranger2" maxLength="50" onChange={handleChange}/>
            <span> Format: 50 characters max</span>

            <br/>
            <br/>
            <label>BPM:</label>
            <input type="number" id="bpm" name="bpm" min="40" max="240" onChange={handleChange}/>
            <span> Between 40 and 240 bpm</span>

            <br/>
            <br/>
            <label>Category:</label>
            <select name="category" id="category" required onChange={handleChange}>
                    <option value="">-Select Cover or Commission-</option>
                    <option value="Cover" >Cover</option>
                    <option value="Commission">Commission</option>
            </select>

            <br/>
            <br/>
            <label>Brief Description</label>
            <br/>
            <textarea id="description" name="description" maxLength="255" onChange={handleChange}/>
            <br/>
            <span>Limit: 255 characters</span>

            <br/>
            <br/>
            <button type="submit">Submit</button>   
            </form>
        </div>
    );
}

export default AddSong;