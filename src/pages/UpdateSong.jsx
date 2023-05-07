import React, {useReducer, useState} from "react";
import axios from "axios";

//Song Submission Form Page

function UpdateSong() {
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
    const [post,setPost] = useState([]);

    //Pass JSON POST Request body through Axios
    const updateSong = (formData) => {
        axios
            .post("/putSong", formData)
            .then((response) => {
                console.log(response)
                alert(response.data);
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
        updateSong(formData);
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
            <h1>Update a Song</h1>
            <p>To update a song, please enter a song name and select one of the following fields:</p>
            <p>For the field selected, enter your changes</p>
            <br/>

            <form onSubmit={handleSubmit}>
            <label>Update Song: </label>
            <input type="text" id="name" name="name" maxLength="50" required onChange={handleChange}/>

            <label> By:</label>
                <select name="updateField" id="updateField" onChange={handleChange}>
                    <option value="" defaultValue=""> </option>
                    <option value="updateSongName" defaultValue="updateSongName">Song Name</option>
                    <option value="updateUnit">Unit ID</option>
                    <option value="updateLength">Song Length</option>
                    <option value="updateReleaseDate">Release Date</option>
                    <option value="updateComposer1">Composer 1</option>
                    <option value="updateComposer2">Composer 2</option>
                    <option value="updateLyricist1">Lyricist 1</option>
                    <option value="updateLyricist2">Lyricist 2</option>
                    <option value="updateArranger1">Arranger 1</option>
                    <option value="updateArranger2">Arranger 2</option>
                    <option value="updateBPM">BPM</option>
                    <option value="updateCategory">Category</option>
                    <option value="updateSinger1">Singer 1</option>
                    <option value="updateSinger2">Singer 2</option>
                    <option value="updateSinger3">Singer 3</option>
                    <option value="updateSinger4">Singer 4</option>
                    <option value="updateSinger5">Singer 5</option>
                    <option value="updateSinger6">Singer 6</option>
                    <option value="updateSongDesc">Song Description</option>
                </select>

            <br/>
            <br/>

            <label>New Song Name: </label>
            <input type="text" id="newSongName" name="newSongName" maxLength="50" onChange={handleChange}/>
            <span> Format: 50 characters max</span>

            <br/>
            <br/>

            <label>New Unit:</label>
            <select name="newUnit" id="newUnit" onChange={handleChange}>
                <option value="" defaultValue="">-Select a Unit-</option>
                <option value="VS">VIRTUAL SINGER</option>
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
            <label>New Singers: </label>
            <select name="newSinger1" id="newSinger1" onChange={handleChange}>
                    <option defaultValue="">Singer1</option>
                    <option value="VS">VIRTUAL SINGER</option><option value="VS-01">Miku</option><option value="VS-02">Rin</option><option value="VS-03">Len</option><option value="VS-04">Luka</option><option value="VS-05">MEIKO</option><option value="VS-06">KAITO</option>
                    <option value="LN">Leo/need</option><option value="LN-01">Ichika</option><option value="LN-02">Saki</option><option value="LN-03">Honami</option><option value="LN-04">Shiho</option>
                    <option value="MMJ">MORE MORE JUMP!</option><option value="MMJ-01">Minori</option><option value="MMJ-02">Haruka</option><option value="MMJ-03">Airi</option><option value="MMJ-04">Shizuku</option>
                    <option value="VBS">Vivid BAD SQUAD</option><option value="VBS-01">Kohane</option><option value="VBS-02">An</option><option value="VBS-03">Akito</option><option value="VBS-04">Toya</option>
                    <option value="WXS">Wonderlands x Showtime</option><option value="WXS-01">Tsukasa</option><option value="WXS-02">Emu</option><option value="WXS-03">Nene</option><option value="WXS-04">Rui</option>
                    <option value="N25">Nightcord at 25:00</option><option value="N25-01">Kanade</option><option value="N25-02">Mafuyu</option><option value="N25-03">Ena</option><option value="N25-04">Mizuki</option>
            </select>
            <select name="newSinger2" id="newSinger2" onChange={handleChange}>
                    <option defaultValue="">Singer2</option>
                    <option value="VS">VIRTUAL SINGER</option><option value="VS-01">Miku</option><option value="VS-02">Rin</option><option value="VS-03">Len</option><option value="VS-04">Luka</option><option value="VS-05">MEIKO</option><option value="VS-06">KAITO</option>
                    <option value="LN">Leo/need</option><option value="LN-01">Ichika</option><option value="LN-02">Saki</option><option value="LN-03">Honami</option><option value="LN-04">Shiho</option>
                    <option value="MMJ">MORE MORE JUMP!</option><option value="MMJ-01">Minori</option><option value="MMJ-02">Haruka</option><option value="MMJ-03">Airi</option><option value="MMJ-04">Shizuku</option>
                    <option value="VBS">Vivid BAD SQUAD</option><option value="VBS-01">Kohane</option><option value="VBS-02">An</option><option value="VBS-03">Akito</option><option value="VBS-04">Toya</option>
                    <option value="WXS">Wonderlands x Showtime</option><option value="WXS-01">Tsukasa</option><option value="WXS-02">Emu</option><option value="WXS-03">Nene</option><option value="WXS-04">Rui</option>
                    <option value="N25">Nightcord at 25:00</option><option value="N25-01">Kanade</option><option value="N25-02">Mafuyu</option><option value="N25-03">Ena</option><option value="N25-04">Mizuki</option>
            </select>
            <select name="newSinger3" id="newSinger3" onChange={handleChange}>
                    <option defaultValue="">Singer3</option>
                    <option value="VS">VIRTUAL SINGER</option><option value="VS-01">Miku</option><option value="VS-02">Rin</option><option value="VS-03">Len</option><option value="VS-04">Luka</option><option value="VS-05">MEIKO</option><option value="VS-06">KAITO</option>
                    <option value="LN">Leo/need</option><option value="LN-01">Ichika</option><option value="LN-02">Saki</option><option value="LN-03">Honami</option><option value="LN-04">Shiho</option>
                    <option value="MMJ">MORE MORE JUMP!</option><option value="MMJ-01">Minori</option><option value="MMJ-02">Haruka</option><option value="MMJ-03">Airi</option><option value="MMJ-04">Shizuku</option>
                    <option value="VBS">Vivid BAD SQUAD</option><option value="VBS-01">Kohane</option><option value="VBS-02">An</option><option value="VBS-03">Akito</option><option value="VBS-04">Toya</option>
                    <option value="WXS">Wonderlands x Showtime</option><option value="WXS-01">Tsukasa</option><option value="WXS-02">Emu</option><option value="WXS-03">Nene</option><option value="WXS-04">Rui</option>
                    <option value="N25">Nightcord at 25:00</option><option value="N25-01">Kanade</option><option value="N25-02">Mafuyu</option><option value="N25-03">Ena</option><option value="N25-04">Mizuki</option>
            </select>
            <select name="newSinger4" id="newSinger4" onChange={handleChange}>
                    <option defaultValue="">Singer4</option>
                    <option value="VS">VIRTUAL SINGER</option><option value="VS-01">Miku</option><option value="VS-02">Rin</option><option value="VS-03">Len</option><option value="VS-04">Luka</option><option value="VS-05">MEIKO</option><option value="VS-06">KAITO</option>
                    <option value="LN">Leo/need</option><option value="LN-01">Ichika</option><option value="LN-02">Saki</option><option value="LN-03">Honami</option><option value="LN-04">Shiho</option>
                    <option value="MMJ">MORE MORE JUMP!</option><option value="MMJ-01">Minori</option><option value="MMJ-02">Haruka</option><option value="MMJ-03">Airi</option><option value="MMJ-04">Shizuku</option>
                    <option value="VBS">Vivid BAD SQUAD</option><option value="VBS-01">Kohane</option><option value="VBS-02">An</option><option value="VBS-03">Akito</option><option value="VBS-04">Toya</option>
                    <option value="WXS">Wonderlands x Showtime</option><option value="WXS-01">Tsukasa</option><option value="WXS-02">Emu</option><option value="WXS-03">Nene</option><option value="WXS-04">Rui</option>
                    <option value="N25">Nightcord at 25:00</option><option value="N25-01">Kanade</option><option value="N25-02">Mafuyu</option><option value="N25-03">Ena</option><option value="N25-04">Mizuki</option>
            </select>
            <select name="newSinger5" id="newSinger5" onChange={handleChange}>
                    <option defaultValue="">Singer5</option>
                    <option value="VS">VIRTUAL SINGER</option><option value="VS-01">Miku</option><option value="VS-02">Rin</option><option value="VS-03">Len</option><option value="VS-04">Luka</option><option value="VS-05">MEIKO</option><option value="VS-06">KAITO</option>
                    <option value="LN">Leo/need</option><option value="LN-01">Ichika</option><option value="LN-02">Saki</option><option value="LN-03">Honami</option><option value="LN-04">Shiho</option>
                    <option value="MMJ">MORE MORE JUMP!</option><option value="MMJ-01">Minori</option><option value="MMJ-02">Haruka</option><option value="MMJ-03">Airi</option><option value="MMJ-04">Shizuku</option>
                    <option value="VBS">Vivid BAD SQUAD</option><option value="VBS-01">Kohane</option><option value="VBS-02">An</option><option value="VBS-03">Akito</option><option value="VBS-04">Toya</option>
                    <option value="WXS">Wonderlands x Showtime</option><option value="WXS-01">Tsukasa</option><option value="WXS-02">Emu</option><option value="WXS-03">Nene</option><option value="WXS-04">Rui</option>
                    <option value="N25">Nightcord at 25:00</option><option value="N25-01">Kanade</option><option value="N25-02">Mafuyu</option><option value="N25-03">Ena</option><option value="N25-04">Mizuki</option>
            </select>
            <select name="newSinger6" id="newSinger6" onChange={handleChange}>
                    <option defaultValue="">Singer6</option>
                    <option value="VS">VIRTUAL SINGER</option><option value="VS-01">Miku</option><option value="VS-02">Rin</option><option value="VS-03">Len</option><option value="VS-04">Luka</option><option value="VS-05">MEIKO</option><option value="VS-06">KAITO</option>
                    <option value="LN">Leo/need</option><option value="LN-01">Ichika</option><option value="LN-02">Saki</option><option value="LN-03">Honami</option><option value="LN-04">Shiho</option>
                    <option value="MMJ">MORE MORE JUMP!</option><option value="MMJ-01">Minori</option><option value="MMJ-02">Haruka</option><option value="MMJ-03">Airi</option><option value="MMJ-04">Shizuku</option>
                    <option value="VBS">Vivid BAD SQUAD</option><option value="VBS-01">Kohane</option><option value="VBS-02">An</option><option value="VBS-03">Akito</option><option value="VBS-04">Toya</option>
                    <option value="WXS">Wonderlands x Showtime</option><option value="WXS-01">Tsukasa</option><option value="WXS-02">Emu</option><option value="WXS-03">Nene</option><option value="WXS-04">Rui</option>
                    <option value="N25">Nightcord at 25:00</option><option value="N25-01">Kanade</option><option value="N25-02">Mafuyu</option><option value="N25-03">Ena</option><option value="N25-04">Mizuki</option>
            </select>

            <br/>
            <br/>
            <label>New Song Length: </label>
            <input type="number" id="newMin" name="newMin" min="0" max="9" onChange={handleChange}/> minutes,     <input type="number" id="newSec" name="newSec" min="0" max="59" onChange={handleChange} /> seconds
            <br/>
            <span> Format: 9 minutes, 59 seconds max</span>   

            <br/>
            <br/>
            <label>New Release Date: </label>
            <input type="date" name="newDate" id="newDate" min="2020-09-01" onChange={handleChange} />

            <br/>
            <br/>
            <label>New Composer(s): </label>
            <input type="text" id="newComposer1" name="newComposer1" maxLength="50" onChange={handleChange}/>
            <input type="text" id="newComposer2" name="newComposer2" maxLength="50" onChange={handleChange}/>
            <span> Format: 50 characters max</span>

            <br/>
            <br/>
            <label>New Lyricist(s): </label>
            <input type="text" id="newLyricist1" name="newLyricist1" maxLength="50" onChange={handleChange}/>
            <input type="text" id="newLyricist2" name="newLyricist2" maxLength="50" onChange={handleChange}/>
            <span> Format: 50 characters max</span>

            <br/>
            <br/>
            <label>New Arranger(s): </label>
            <input type="text" id="newArranger1" name="newArranger1" maxLength="50" onChange={handleChange}/>
            <input type="text" id="newArranger2" name="newArranger2" maxLength="50" onChange={handleChange}/>
            <span> Format: 50 characters max</span>

            <br/>
            <br/>
            <label>New BPM:</label>
            <input type="number" id="newBPM" name="newBPM" min="40" max="240" onChange={handleChange}/>
            <span> Between 40 and 240 bpm</span>

            <br/>
            <br/>
            <label>New Song Category:</label>
            <select name="newCategory" id="newCategory" onChange={handleChange}>
                    <option value="">-Select Cover or Commission-</option>
                    <option value="Cover" >Cover</option>
                    <option value="Commission">Commission</option>
            </select>

            <br/>
            <br/>
            <label>Brief Description</label>
            <br/>
            <textarea id="newSongDesc" name="newSongDesc" maxLength="255" onChange={handleChange}/>
            <br/>
            <span>Limit: 255 characters</span>

            <br/>
            <br/>
            <button type="submit">Submit</button>   
            </form>
        </div>
    );
}

export default UpdateSong;