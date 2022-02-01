import { useState } from 'react';
import {Binary} from '../Binary';

const correctRed = Math.floor(Math.random() * (256));
const correctGreen = Math.floor(Math.random() * (256));
const correctBlue = Math.floor(Math.random() * (256));

export default function Page8(props:{
  setEnabled: (arg0: boolean)=> void,
  hexToRGB: (arg0: string) =>  {[k: string]: number}
}):JSX.Element {

  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const check = (r:number, g:number, b:number) => {
    if(r == correctRed && g == correctGreen && b == correctBlue) {
      props.setEnabled(true);
    }
    else {
      props.setEnabled(false);
    }
  };


  return(
    <div id="level-eight" className="level">
      <div className="title2">Convert the binary number to an RGB code.</div>
      <Binary r={correctRed} g={correctGreen} b={correctBlue} labels={true}></Binary>
      <div className='input-container'>
        rgb (
        <input type="text" className='input' onInput={(e)=>{
          const val = parseInt((e.target as HTMLTextAreaElement).value);
          setRed(val);
          check(val, green, blue);
        }}></input>,
        <input type="text" className='input' onInput={(e)=>{
          const val = parseInt((e.target as HTMLTextAreaElement).value);
          setGreen(val);
          check(red, val, blue);
        }}></input>,
        <input type="text" className='input' onInput={(e)=>{
          const val = parseInt((e.target as HTMLTextAreaElement).value);
          setBlue(val);
          check(red, green, val);
        }}></input>
        )
      </div>
    </div>
  );
}