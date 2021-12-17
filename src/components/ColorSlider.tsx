import React from 'react';
import '../styles/slider.scss';

interface ColorSliderProps {
  setRed: React.Dispatch<React.SetStateAction<number>>;
  red: number;
  setGreen: React.Dispatch<React.SetStateAction<number>>;
  green: number;
  setBlue: React.Dispatch<React.SetStateAction<number>>;
  blue: number;
  setEnabled: (arg0: boolean)=> void,
  correctRed: number,
  correctGreen: number,
  correctBlue:number,
}
export default function ColorSlider(props: ColorSliderProps):JSX.Element {
  // let css = '';
  const check = (r:number, g:number, b:number) => {
    if(r == props.correctRed && g == props.correctGreen && b == props.correctBlue) {
      props.setEnabled(true);
    }
    else {
      props.setEnabled(false);
    }
  };
  return (
    <div id="sliders">
      <div>
        <span className="color-label">Red</span> <span className="color-number">{props.red}</span>
        <input
          id="red"
          className="e-range"
          type="range"
          min={0}
          max={255}
          step={1}
          value={props.red}
          onChange={(event) => {
            props.setRed(parseInt(event.target.value));
            check(parseInt(event.target.value), props.green, props.blue);
          }}
        />
      </div>

      <div>
        <span className="color-label">Green</span> <span className="color-number">{props.green}</span>
        <input
          id="green"
          className="e-range"
          type="range"
          min={0}
          max={255}
          step={1}
          value={props.green}
          onChange={(event) => {
            props.setGreen(parseInt(event.target.value));
            check(props.red, parseInt(event.target.value), props.blue);
          }}
        />
      </div>
      <div>
        <span className="color-label">Blue</span> <span className="color-number">{props.blue}</span>
        <input
          id="blue"
          className="e-range"
          type="range"
          min={0}
          max={255}
          step={1}
          value={props.blue}
          onChange={(event) => {
            props.setBlue(parseInt(event.target.value));
            check(props.red, props.green, parseInt(event.target.value));
          }}
        />
      </div>
    </div>
  );
}
