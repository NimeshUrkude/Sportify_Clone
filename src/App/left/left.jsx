import "./leftstyle.css"
import logo from "./logo.png";
import artist from "./artest.png";
import music from "./music.png";
import {Link} from "react-router-dom";


function Left() {
  return(
    <div className="leftdiv">
    <Link to="/" className="leftlink">
      <img src={logo} className="leftdiv_logo"/>
      </Link>
      <Link to="/music" className="leftlink">
        <img src={music} className="leftdiv_music"/>
        <span className="left_head">Music</span>
      </Link>
      <Link to="/artist" className="leftlink">
        <img src={artist} className="leftdiv_astest"/>
        <span className="left_head">Artist</span>
      </Link>
    </div>
  )
}

export default Left;