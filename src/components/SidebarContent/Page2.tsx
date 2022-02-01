import { useState } from 'react';
import ColorSlider from '../ColorSlider';
import {Swatch} from '../Swatch';

const correctRed = Math.floor(Math.random() * (256));
const correctGreen = Math.floor(Math.random() * (256));
const correctBlue = Math.floor(Math.random() * (256));

export default function Page2(props:{setEnabled: (arg0: boolean)=> void}):JSX.Element {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  return(
    <div id="level-two" className="level">
      <div className="swatches">
        <Swatch r={correctRed} g={correctGreen} b={correctBlue} showRGB={false}></Swatch>
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
          setEnabled={props.setEnabled}
          correctRed={correctRed}
          correctGreen={correctGreen}
          correctBlue={correctBlue}
        />
      </div>
    </div>
  );
}