import { useState } from 'react';
import ColorSlider from '../ColorSlider';
import {Swatch} from '../Swatch';
export default function Page3():JSX.Element {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  return(
    <div id="level-three" className="level">
      <div className="swatches">
        <Swatch r={0} g={35} b={80} mystery={true}></Swatch>
        <Swatch r={red} g={green} b={blue}></Swatch>
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
      </div>
    </div>
  );
}