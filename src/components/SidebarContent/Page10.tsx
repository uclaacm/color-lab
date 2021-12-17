import {Binary} from '../Binary';
import {Swatch} from '../Swatch';

const choices = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => Math.floor(Math.random() * (256))));
const correct = Math.floor(Math.random() * (3));

export default function Page10(props:{setEnabled: (arg0: boolean)=> void}):JSX.Element {
  return(
    <div id="level-ten" className="level">
      <div className="title2">What color is this?</div>
      <Binary r={choices[correct][0]} g={choices[correct][1]} b={choices[correct][2]} labels={false}></Binary>
      <div className="swatches">
        <span className='swatch-choose' onClick={() => {if(correct == 0) props.setEnabled(true);}}><Swatch r={choices[0][0]} g={choices[0][1]} b={choices[0][2]}></Swatch></span>
        <span className='swatch-choose' onClick={() => {if(correct == 1) props.setEnabled(true);}}><Swatch r={choices[1][0]} g={choices[1][1]} b={choices[1][2]}></Swatch></span>
        <span className='swatch-choose' onClick={() => {if(correct == 2) props.setEnabled(true);}}><Swatch r={choices[2][0]} g={choices[2][1]} b={choices[2][2]}></Swatch></span>
      </div>
    </div>
  );
}