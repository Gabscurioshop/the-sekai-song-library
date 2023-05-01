import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

//Unit View Page
function UnitView() {

    const location = useLocation();

    const [post, setPost] = React.useState(null);
    var baseURL = "";

    //Get baseURL based on Unit ID
    if (location.state.id === "VS") baseURL="/VS";
    else if (location.state.id === "LN") baseURL="/LN";
    else if (location.state.id === "MMJ") baseURL="/MMJ";
    else if (location.state.id === "VBS") baseURL="/VBS";
    else if (location.state.id === "WXS") baseURL="/WXS";
    else if (location.state.id === "N25") baseURL = "/N25";

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
        <h2>Abbreviation: {post.id} </h2> 
        <h2>Hex Color: {post.color} </h2> 
        <h2>Profile: </h2> 
        {post.profile}
        <h2>Members</h2>
        <p>{post.member_1}, {post.member_2}, {post.member_3}, {post.member_4}, {post.member_5}, {post.member_6}
        </p>

    </div>
  );
}

export default UnitView;