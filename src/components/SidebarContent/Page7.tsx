import Select from '../Select';
import {Swatch} from '../Swatch';

export default function Page7():JSX.Element {
  return(
    <div id="level-seven" className="level">
      <div className="title2">What color is this?</div>
      <div className='swatches single'>
        <Swatch r={0} g={255} b={255} mystery={true} binary={true}></Swatch>
      </div>
      <Select></Select>
    </div>
  );
}