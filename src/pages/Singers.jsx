import {React} from 'react';
import { Link, useNavigate } from "react-router-dom";

//Units Page
function Singers() {

  const navigate = useNavigate();
  const showMiku = (id) => {navigate("/singerview", {state:  {id: "VS-01"}});};
  const showRin = (id) => {navigate("/singerview", {state:  {id: "VS-02"}});};
  const showLen = (id) => {navigate("/singerview", {state:  {id: "VS-03"}});};
  const showLuka = (id) => {navigate("/singerview", {state:  {id: "VS-04"}});};
  const showMeiko = (id) => {navigate("/singerview", {state:  {id: "VS-05"}});};
  const showKaito= (id) => {navigate("/singerview", {state:  {id: "VS-06"}});};
  const showIchika = (id) => {navigate("/singerview", {state:  {id: "LN-01"}});};
  const showSaki = (id) => {navigate("/singerview", {state:  {id: "LN-02"}});};
  const showHonami = (id) => {navigate("/singerview", {state:  {id: "LN-03"}});};
  const showShiho = (id) => {navigate("/singerview", {state:  {id: "LN-04"}});};
  const showMinori = (id) => {navigate("/singerview", {state:  {id: "MMJ-01"}});};
  const showHaruka = (id) => {navigate("/singerview", {state:  {id: "MMJ-02"}});};
  const showAiri = (id) => {navigate("/singerview", {state:  {id: "MMJ-03"}});};
  const showShizuku = (id) => {navigate("/singerview", {state:  {id: "MMJ-04"}});};
  const showKohane = (id) => {navigate("/singerview", {state:  {id: "VBS-01"}});};
  const showAn = (id) => {navigate("/singerview", {state:  {id: "VBS-02"}});};
  const showAkito = (id) => {navigate("/singerview", {state:  {id: "VBS-03"}});};
  const showToya = (id) => {navigate("/singerview", {state:  {id: "VBS-04"}});};
  const showTsukasa = (id) => {navigate("/singerview", {state:  {id: "WXS-01"}});};
  const showEmu = (id) => {navigate("/singerview", {state:  {id: "WXS-02"}});};
  const showNene = (id) => {navigate("/singerview", {state:  {id: "WXS-03"}});};
  const showRui = (id) => {navigate("/singerview", {state:  {id: "WXS-04"}});};
  const showKanade = (id) => {navigate("/singerview", {state:  {id: "N25-01"}});};
  const showMafuyu = (id) => {navigate("/singerview", {state:  {id: "N25-02"}});};
  const showEna = (id) => {navigate("/singerview", {state:  {id: "N25-03"}});};
  const showMizuki = (id) => {navigate("/singerview", {state:  {id: "N25-04"}});};
  
  return (
    <div>
      <h1>Singers</h1>
      <p>There are 20 human singers and 6 Virtual Singers in the game. 
      </p>
      <p>To view a singer's profile, click on the singer's name.</p>  

      <h2>VIRTUAL SINGERS</h2>
      <Link to="/singerview" state={{id:"VS-01"}}></Link>
      <button onClick={showMiku}>Hatsune Miku</button>
      <Link to="/singerview" state={{id:"VS-02"}}></Link>
      <button onClick={showRin}>Kagamine Rin</button>
      <Link to="/singerview" state={{id:"VS-03"}}></Link>
      <button onClick={showLen}>Kagamine Len</button>
      <Link to="/singerview" state={{id:"VS-04"}}></Link>
      <button onClick={showLuka}>Megurine Luka</button>
      <Link to="/singerview" state={{id:"VS-05"}}></Link>
      <button onClick={showMeiko}>MEIKO</button>
      <Link to="/singerview" state={{id:"VS-06"}}></Link>
      <button onClick={showKaito}>KAITO</button>

      <h2>Leo/need</h2>
      <Link to="/singerview" state={{id:"LN-01"}}></Link>
      <button onClick={showIchika}>Hoshino Ichika</button>
      <Link to="/singerview" state={{id:"LN-02"}}></Link>
      <button onClick={showSaki}>Tenma Saki</button>
      <Link to="/singerview" state={{id:"LN-03"}}></Link>
      <button onClick={showHonami}>Mochizuki Honami</button>
      <Link to="/singerview" state={{id:"LN-04"}}></Link>
      <button onClick={showShiho}>Hinomori Shiho</button>

      <h2>MORE MORE JUMP!</h2>
      <Link to="/singerview" state={{id:"MMJ-01"}}></Link>
      <button onClick={showMinori}>Hanasato Minori</button>
      <Link to="/singerview" state={{id:"MMJ-02"}}></Link>
      <button onClick={showHaruka}>Kiritani Haruka</button>
      <Link to="/singerview" state={{id:"MMJ-03"}}></Link>
      <button onClick={showAiri}>Momoi Airi</button>
      <Link to="/singerview" state={{id:"MMJ-04"}}></Link>
      <button onClick={showShizuku}>Hinomori Shizuku</button>

      <h2>Vivid BAD SQUAD</h2>
      <Link to="/singerview" state={{id:"VBS-01"}}></Link>
      <button onClick={showKohane}>Azusawa Kohane</button>
      <Link to="/singerview" state={{id:"VBS-02"}}></Link>
      <button onClick={showAn}>Shiraishi An</button>
      <Link to="/singerview" state={{id:"VBS-03"}}></Link>
      <button onClick={showAkito}>Shinonome Akito</button>
      <Link to="/singerview" state={{id:"VBS-04"}}></Link>
      <button onClick={showToya}>Aoyagi Toya</button>

      <h2>Wonderlands x Showtime</h2>
      <Link to="/singerview" state={{id:"WXS-01"}}></Link>
      <button onClick={showTsukasa}>Tenma Tsukasa</button>
      <Link to="/singerview" state={{id:"WXS-02"}}></Link>
      <button onClick={showEmu}>Otori Emu</button>
      <Link to="/singerview" state={{id:"WXS-03"}}></Link>
      <button onClick={showNene}>Kusanagi Nene</button>
      <Link to="/singerview" state={{id:"WXS-04"}}></Link>
      <button onClick={showRui}>Kamishiro Rui</button>

      <h2>Nightcord at 25:00</h2>
      <Link to="/singerview" state={{id:"N25-01"}}></Link>
      <button onClick={showKanade}>Yoisaki Kanade</button>
      <Link to="/singerview" state={{id:"N25-02"}}></Link>
      <button onClick={showMafuyu}>Asahina Mafuyu</button>
      <Link to="/singerview" state={{id:"N25-03"}}></Link>
      <button onClick={showEna}>Shinonome Ena</button>
      <Link to="/singerview" state={{id:"N25-04"}}></Link>
      <button onClick={showMizuki}>Akiyama Mizuki</button>

    </div>
  );
}

export default Singers;