import {React} from 'react';
import { Link, useNavigate } from "react-router-dom";

//Units Page
function Units() {

  const navigate = useNavigate();
  const showVS = (id) => {navigate("/unitview", {state:  {id: "VS"}});};
  const showLN = (id) => {navigate("/unitview", {state:  {id: "LN"}});};
  const showMMJ = (id) => {navigate("/unitview", {state:  {id: "MMJ"}});};
  const showVBS = (id) => {navigate("/unitview", {state:  {id: "VBS"}});};
  const showWXS = (id) => {navigate("/unitview", {state:  {id: "WXS"}});};
  const showN25 = (id) => {navigate("/unitview", {state:  {id: "N25"}});};

  return (
    <div>
      <h1>Units</h1>
      <p>Units are the music groups featured in the game. 
          The five main units are Leo/need, MORE MORE JUMP!,
          Vivid BAD SQUAD, Wonderlands x Showtime, and Nightcord at 25:00.
          Each unit has four human singers and six VIRTUAL SINGERS.
      </p>
      <p>To view a unit's profile, click on the unit's name.</p>   
      <Link to="/unitview" state={{id:"VS"}}></Link>
      <button onClick={showVS}>VIRTUAL SINGER</button>
      <br/>
      <Link to="/unitview" state={{id:"LN"}}></Link>
      <button onClick={showLN}>Leo/need</button>
      <br/>
      <Link to="/unitview" state={{id:"MMJ"}}></Link>
      <button onClick={showMMJ}>MORE MORE JUMP!</button>
      <br/>
      <Link to="/unitview" state={{id:"VBS"}}></Link>
      <button onClick={showVBS}>Vivid BAD SQUAD</button>
      <br/>
      <Link to="/unitview" state={{id:"WXS"}}></Link>
      <button onClick={showWXS}>Wonderlands x Showtime</button>
      <br/>
      <Link to="/unitview" state={{id:"N25"}}></Link>
      <button onClick={showN25}>Nightcord at 25:00</button>
      <br/>
    </div>
  );
}

export default Units;