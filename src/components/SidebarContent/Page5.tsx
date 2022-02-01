import Select from '../Select';
import {Swatch} from '../Swatch';

const choices: {[k: string]: string} = {red: '#FF0000', green: '#00FF00', blue: '#0000FF', magenta: '#FF00FF', cyan: '#00FFFF', yellow: '#FFFF00'};
const colorsArray  = Object.keys(choices);
const correctColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
const correctHex  = choices[correctColor];

export default function Page5(props:{
  setEnabled: (arg0: boolean)=> void,
  hexToRGB: (arg0: string) =>  {[k: string]: number}
}):JSX.Element {

  return(
    <div id="level-five" className="level">
      <div className="title2">What color is this?</div>
      <div className='swatches single'>
        <Swatch
          r={props.hexToRGB(correctHex).r}
          g={props.hexToRGB(correctHex).g}
          b={props.hexToRGB(correctHex).b}
          mystery={true}
        ></Swatch>
      </div>
      <Select setEnabled={props.setEnabled} correctColor={correctColor}></Select>
    </div>
  );
}