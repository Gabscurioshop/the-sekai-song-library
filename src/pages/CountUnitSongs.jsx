import React, {useState} from "react";
import axios from "axios";
import {Chart as ChartJS, BarElement, LinearScale, CategoryScale} from "chart.js";
import { Bar } from "react-chartjs-2";

//Register Chart Rendering
ChartJS.register(CategoryScale,LinearScale,BarElement)

//Bar Graph Properties
var labels = [];
var graph_data = [];
function CountUnitSongs(){

    //state for sending chart request to backend
    const [post,setPost] = useState([]);

     //Pass JSON GET Request body through Axios
     React.useEffect(() => {
        axios.get("/songsByUnit").then((response) => {
            setPost(response.data);
        });
    }, []);

    //return NULL if query fails
    if (!post) return null;
    else if (post.length === 0){
        labels = [];
        graph_data = [];
    }
    else{
        for (var i = 0; i < post.length; i++) {
            //Save Unit IDs as graph labels
            labels[i] = post[i].Unit_ID;
            //Save Song count as data
            graph_data[i] = post[i].Song_Count;
        }
    }
    return (
        <div>
            <h1>Total Songs By Unit</h1>
           
            <Bar
                data={
                    {
                        labels: labels,
                        datasets: [{
                            label: "Total Songs",
                            data: graph_data,
                            backgroundColor: [
                            'rgba(68, 85, 221, 1)', //LN
                            'rgba(0, 205, 186, 1)',//MIX
                            'rgba(108, 203, 32, 1)',//MMJ
                            'rgba(136, 68, 153, 1)',//N25
                            'rgba(238, 17, 102, 1)',//VBS
                            'rgba(255, 153, 0, 1)'//WXS
                            ],
                            borderColor: [
                            'rgba(68, 85, 221, 1)',//LN
                            'rgba(0, 205, 186, 1)',//MIX
                            'rgba(108, 203, 32, 1)',//MMJ
                            'rgba(136, 68, 153, 1)',//N25
                            'rgba(238, 17, 102, 1)',//VBS
                            'rgba(255, 153, 0, 1)'//WXS
                            ],
                            borderWidth: 0.5,
                        },],
                    }
                }
                height={100}
                options={
                    {
                    maintainAspectRation: false,
                    scales: {y: {beginatZero: true}},
                    legend: {labels: {fontSize: 26}}
                    }
                }
            />
        </div>

    );
}

export default CountUnitSongs;