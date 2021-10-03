import { useState } from 'react';
import ColorSlider from '../ColorSlider';
import {Swatch} from '../Swatch';
export default function Page1():JSX.Element {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  return(
    <div id="level-one" className="level">
      <div className="swatches">
        <Swatch r={0} g={35} b={80}></Swatch>
        <Swatch r={0} g={35} b={80}></Swatch>
      </div>
      <div className="sliders">
        <ColorSlider
          red={red}
          setRed={setRed}
          green={green}
          setGreen={setGreen}
          blue={blue}
          setBlue={setBlue}
        />
        {/* <input className="slider" type="range" min="1" max="255" defaultValue={Math.floor(Math.random()*(256))}
          onChange={(event) => setRangeval({event.target.value})}></input> */}
        {/* <input type="range" className="custom-range" min="199" max="3999"
         onChange={(event) => setRangeval(event.target.value)} />
        <h4>The range value is {rangeval}</h4> */}
      </div>
    </div>
  );
}