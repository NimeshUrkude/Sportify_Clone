import React , { useState }from "react";
import "./bottomstyle.css"

import PubSub from 'pubsub-js'

import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import one from "./songs/one.mp3";
import two from "./songs/two.mp3";
import three from "./songs/three.mp3";
import four from "./songs/four.mp3";
import five from "./songs/five.mp3";
import six from "./songs/six.mp3";
import seven from "./songs/seven.mp3";
import eight from "./songs/eight.mp3";
import nine from "./songs/nine.mp3";
import ten from "./songs/ten.mp3";
import eleven from "./songs/eleven.mp3";
import twele from "./songs/twele.mp3";
import thirteen from "./songs/thirteen.mp3";
import fourteen from "./songs/fourteen.mp3";
import fifteen from "./songs/fifteen.mp3";
import sixteen from "./songs/sixteen.mp3";

import {data} from "../musicdata";



function Bottom() {

  const [song,setsong]=useState();
  const [songdetail,setsongdetail]=useState();

  PubSub.subscribe("topic1",function(topic,msg){
    if(msg.da===1){setsong(one);setsongdetail(data[0].name + " By " + data[0].artists);}
    else if(msg.da===2){setsong(two);setsongdetail(data[1].name + " By " + data[1].artists);}
    else if(msg.da===3){setsong(three);setsongdetail(data[2].name + " By " + data[2].artists);}
    else if(msg.da===4){setsong(four);setsongdetail(data[3].name + " By " + data[3].artists);}
    else if(msg.da===5){setsong(five);setsongdetail(data[4].name + " By " + data[4].artists);}
    else if(msg.da===6){setsong(six);setsongdetail(data[5].name + " By " + data[5].artists);}
    else if(msg.da===7){setsong(seven);setsongdetail(data[6].name + " By " + data[6].artists);}
    else if(msg.da===8){setsong(eight);setsongdetail(data[7].name + " By " + data[7].artists);}
    else if(msg.da===9){setsong(nine);setsongdetail(data[8].name + " By " + data[8].artists);}
    else if(msg.da===10){setsong(ten);setsongdetail(data[9].name + " By " + data[9].artists);}
    else if(msg.da===11){setsong(eleven);setsongdetail(data[10].name + " By " + data[10].artists);}
    else if(msg.da===12){setsong(twele);setsongdetail(data[11].name + " By " + data[11].artists);}
    else if(msg.da===13){setsong(thirteen);setsongdetail(data[12].name + " By " + data[12].artists);}
    else if(msg.da===14){setsong(fourteen);setsongdetail(data[13].name + " By " + data[13].artists);}
    else if(msg.da===15){setsong(fifteen);setsongdetail(data[14].name + " By " + data[14].artists);}
    else if(msg.da===16){setsong(sixteen);setsongdetail(data[15].name + " By " + data[15].artists);}
  })


  return(
    <div className="bottom_div">
    {songdetail?<marquee className="bottom_marquee">{songdetail}</marquee>:""}
    <AudioPlayer
      style={{padding: '0px',margin:"0px",border:"10px solid black",backgroundColor:"black"}}
      src={song}
      showDownloadProgress={false}
      customProgressBarSection={[
        RHAP_UI.CURRENT_TIME,
        RHAP_UI.PROGRESS_BAR
      ]}
      customControlsSection={[
        RHAP_UI.ADDITIONAL_CONTROLS,
        RHAP_UI.MAIN_CONTROLS,
        RHAP_UI.VOLUME_CONTROLS,
      ]}
    />
  </div>
  )
}

export default Bottom;