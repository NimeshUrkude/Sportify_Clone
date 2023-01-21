import './App.css';
import Left from "./left/left.jsx";
import RightHome from "./righthome/righthome";
import Rightmusic from "./rightmusic/rightmusic";
import Righrartist from "./rightartist/rightartist";
import Bottom from "./bottom/bottom.jsx";
import AnimatedCursor from "react-animated-cursor";
import {Route,Routes,useLocation} from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
    <AnimatedCursor
      innerSize={10}
      outerSize={8}
      color='255, 255, 255'
      outerAlpha={0.3}
      innerScale={0.8}
      outerScale={7}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <div className='top'>
        <Left/>
        <Routes location={location} key={location.pathname}>
            <Route path="/Sportify_Clone" element={<RightHome/>}/>
            <Route path="/Sportify_Clone/music" element={<Rightmusic/>}/>
            <Route path="/Sportify_Clone/artist" element={<Righrartist/>}/>
        </Routes>
      </div>
      <Bottom/>
    </>
  );
}

export default App;
