import React from "react";
import "./rightmusicstyle.css"
import Muiscbox from "../musicbox/musicbox";
import Rightupper from "../rightupper/rightupper";
import Bio from "../bio/bio";

import {data} from "../musicdata";

function Rightmusic() {
  return(
    <div className="right_div">
      <Rightupper/>
      <p className="right_heading">Musics</p>
        <div className="right_div_inner">
        {data.map(function(da,index){
          return <Muiscbox name={da.name} image={da.img} date={da.date} realkey={da.key} key={index}/>
        })}
        </div>
        <Bio/>
    </div>
  )
}

export default Rightmusic;
