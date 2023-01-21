import React from "react";
import "./rightartiststyle.css"
import Rightupper from "../rightupper/rightupper";
import Bio from "../bio/bio";

import {data} from "../musicdata";
import Muiscbox from "../musicbox/musicbox";

function Rightartist() {
  return(
    <div className="right_div">
      <Rightupper/>
      <p className="right_heading">Artists</p>
      <div className="right_div_inner">
        {data.map(function(da,index){
          return <Muiscbox name={da.artists} image={da.img} date={da.date} realkey={da.key} key={index}/>
        })}
        </div>
        <Bio/>
    </div>
  )
}

export default Rightartist;
