import React from "react";
import "./rightupperstyle.css"
import arrowr from "./arrowr.png"
import arrowl from "./arrowl.png"

function Rightupper() {
  return(
    <div className="right_upper_div">

      <div>
        <img src={arrowl} alt="Left Arrow" className="right_upper_arrow"/>
        <img src={arrowr} alt="Right Arrow" className="right_upper_arrow"/>
      </div>

      <div>
        <button className="right_upper_signup">SignUp</button>
        <button className="right_upper_login">Login</button>
      </div>
    </div>
  )
}

export default Rightupper;
