import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

//Unit View Page
function SingerView() {

    const location = useLocation();

    const [post, setPost] = React.useState(null);
    var baseURL = "";

    //Get baseURL based on Unit ID
    if(location.state === null) baseURL = "/NoSinger";
    
    else{
      if (location.state.id === "VS-01") baseURL="/VS-01";
      else if (location.state.id === "VS-02") baseURL="/VS-02";
      else if (location.state.id === "VS-03") baseURL="/VS-03";
      else if (location.state.id === "VS-04") baseURL="/VS-04";
      else if (location.state.id === "VS-05") baseURL="/VS-05";
      else if (location.state.id === "VS-06") baseURL="/VS-06";

      else if (location.state.id === "LN-01") baseURL="/LN-01";
      else if (location.state.id === "LN-02") baseURL="/LN-02";
      else if (location.state.id === "LN-03") baseURL="/LN-03";
      else if (location.state.id === "LN-04") baseURL="/LN-04";

      else if (location.state.id === "MMJ-01") baseURL="/MMJ-01";
      else if (location.state.id === "MMJ-02") baseURL="/MMJ-02";
      else if (location.state.id === "MMJ-03") baseURL="/MMJ-03";
      else if (location.state.id === "MMJ-04") baseURL="/MMJ-04";

      else if (location.state.id === "VBS-01") baseURL="/VBS-01";
      else if (location.state.id === "VBS-02") baseURL="/VBS-02";
      else if (location.state.id === "VBS-03") baseURL="/VBS-03";
      else if (location.state.id === "VBS-04") baseURL="/VBS-04";

      else if (location.state.id === "WXS-01") baseURL="/WXS-01";
      else if (location.state.id === "WXS-02") baseURL="/WXS-02";
      else if (location.state.id === "WXS-03") baseURL="/WXS-03";
      else if (location.state.id === "WXS-04") baseURL="/WXS-04";

      else if (location.state.id === "N25-01") baseURL = "/N25-01";
      else if (location.state.id === "N25-02") baseURL = "/N25-02";
      else if (location.state.id === "N25-03") baseURL = "/N25-03";
      else if (location.state.id === "N25-04") baseURL = "/N25-04";
    }

    //Invoke Flask URL and retrieve unit data from database 
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      })
      // eslint-disable-next-line
    }, []);
    
    //if no results are found, return null
    if (!post) return null;

    //render unit data in Unit View 
    return (
    <div>
        <h1>{post.name}</h1>
        <h2>Unit: {post.unit} </h2> 
        <h2>Date of Birth:{post.dob} </h2>
        <h2>Height: {post.height} cm</h2>
        <h2>Voice Actor: {post.voice_actor}</h2>
        <h2>Hex Color: {post.color} </h2> 
        <h2>Profile: </h2> 
        {post.singer_profile}

    </div>
  );
}

export default SingerView;