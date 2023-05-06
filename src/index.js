import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Units from "./pages/Units";
import UnitView from "./pages/UnitView";
import Singers from "./pages/Singers";
import SingerView from "./pages/SingerView";
import Songs from "./pages/Songs";
import AddSong from "./pages/AddSong";
import ViewSong from "./pages/ViewSong";
import NoPage from "./pages/NoPage";

//Routes
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/units" element={<Units />} />
          <Route path="/unitview" element={<UnitView />} />
          <Route path="/singers" element={<Singers />} />
          <Route path="/singerview" element={<SingerView />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/addsong" element={<AddSong />} />
          <Route path="/viewsong" element={<ViewSong />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
