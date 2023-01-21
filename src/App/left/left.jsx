import "./leftstyle.css"
import logo_a from "./logoa.png";
import logo_b from "./logob.png";
import music_icon from "./music.png";
import artist_icon from "./artist.png";
import {Link} from "react-router-dom";


function Left() {
  return(
    <div className="left_div pp">
      <Link to="/Sportify_Clone" className="link_underline_remove">
        <img src={logo_a} alt="Logo" className="left_logo_a"/>
        <img src={logo_b} alt="Spotify" className="left_logo_b"/>
      </Link>
      <Link to="/Sportify_Clone/music" className="link_underline_remove">
        <img src={music_icon} alt="Music Icon" className="left_music_icon"/>
        <span className="left_page_name">Music</span>
      </Link>
      <Link to="/Sportify_Clone/artist" className="link_underline_remove">
        <img src={artist_icon} alt="Artist Icon" className="left_artist_icon"/>
        <span className="left_page_name">Artist</span>
      </Link>
    </div>
  )
}

export default Left;