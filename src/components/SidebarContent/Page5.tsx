import Select from '../Select';
import {Swatch} from '../Swatch';

export default function Page5():JSX.Element {
  return(
    <div id="level-five" className="level">
      <div className="title2">What color is this?</div>
      <div className='swatches single'>
        <Swatch r={0} g={255} b={255} mystery={true}></Swatch>
      </div>
      <Select></Select>
    </div>
  );
}