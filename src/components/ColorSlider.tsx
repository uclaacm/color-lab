import React from "react";

interface ColorSliderProps {
  setRed: React.Dispatch<React.SetStateAction<number>>;
  red: number;
  setGreen: React.Dispatch<React.SetStateAction<number>>;
  green: number;
  setBlue: React.Dispatch<React.SetStateAction<number>>;
  blue: number;
}
export default function ColorSlider(props: ColorSliderProps) {
  return (
    <div>
      <div>Red:</div>
      <input
        type="number"
        value={props.red}
        min={0}
        max={255}
        onChange={(event) => props.setRed(parseInt(event.target.value))}
      />
      <div>
        <input
          type="range"
          min={0}
          max={255}
          step={1}
          value={props.red}
          onChange={(event) => props.setRed(parseInt(event.target.value))}
        />
      </div>

      <div>
        Green:
        <input
          type="number"
          value={props.green}
          onChange={(event) => props.setGreen(parseInt(event.target.value))}
          min={0}
          max={255}
        />
      </div>
      <input
        type="range"
        min={0}
        max={255}
        step={1}
        value={props.green}
        onChange={(event) => props.setGreen(parseInt(event.target.value))}
      />

      <div>
        Blue:
        <input
          type="number"
          value={props.blue}
          onChange={(event) => props.setBlue(parseInt(event.target.value))}
          min={0}
          max={255}
        />
      </div>

      <input
        type="range"
        min={0}
        max={255}
        step={1}
        value={props.blue}
        onChange={(event) => props.setBlue(parseInt(event.target.value))}
      />
    </div>
  );
}
