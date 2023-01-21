import React from "react";
import "./musicboxstyle.css"
import PubSub from 'pubsub-js'
function Musicbox(props) {
  function playsong(){
    let msg = {"da":props.realkey};
    PubSub.publish("topic1",msg);
  }
  return(
    <button onClick={playsong} className="music_box_div">
      <img alt={props.name + " Poster"} className="music_box_img" src={props.image}/>
      <span className="music_box_name">{props.name}</span>
      <span className="music_box_date">{props.date}</span>
    </button>
  )
}

export default Musicbox;
