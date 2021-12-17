/*eslint no-bitwise: "off"*/
import {Binary} from '../Binary';

const correctRed = Math.floor(Math.random() * (256));
const correctGreen = Math.floor(Math.random() * (256));
const correctBlue = Math.floor(Math.random() * (256));

const correctHex = ((1 << 24) + (correctRed << 16) + (correctGreen << 8) + correctBlue).toString(16).slice(1);

export default function Page9(props:{setEnabled: (arg0: boolean)=> void}):JSX.Element {
  return(
    <div id="level-nine" className="level">
      <div className="title2">Convert the binary number to a hex code.</div>
      <Binary r={0} g={255} b={100} labels={false}></Binary>
      <div className='input-container'>
        #
        <input type="text" className='input' onInput={(e)=>{
          const val = (e.target as HTMLTextAreaElement).value;
          if(val.toLowerCase() == correctHex) props.setEnabled(true);
          else props.setEnabled(false);
        }}></input>
      </div>
    </div>
  );
}